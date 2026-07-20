import { useMemo, useState, type ChangeEvent } from 'react'
import {
	applySettingsPatch,
	createSession,
	defaultSettings,
	formatDuration,
	getNextPhase,
	getPhaseLabel,
	getSessionStreak,
	groupSessionsByPhase,
	seedSessions,
	updateSettings,
	type Session,
	type Settings,
	type TimerPhase,
	type TimerState,
} from './utils'
import './app.css'

function App() {
	const [settings, setSettings] = useState<Settings>(defaultSettings)
	const [timerState, setTimerState] = useState<TimerState>({
		status: 'idle',
		phase: 'focus',
	})
	const [sessions, setSessions] = useState<Array<Session>>(seedSessions)

	const currentMinutes =
		timerState.phase === 'focus'
			? settings.focusMinutes
			: timerState.phase === 'shortBreak'
				? settings.shortBreakMinutes
				: settings.longBreakMinutes

	const displayTime = formatDuration(currentMinutes * 60 * 1000)
	const phaseLabel = getPhaseLabel(timerState.phase as TimerPhase)

	const sessionsByPhase = useMemo(
		() => groupSessionsByPhase(sessions),
		[sessions],
	)
	const focusStreak = getSessionStreak(sessions)

	const handleStart = () => {
		// 🐨 Use TimerState to ensure the correct shape for running status
		setTimerState({
			status: 'running',
			phase: timerState.phase,
			startedAt: Date.now(),
			remainingMs: currentMinutes * 60 * 1000,
		})
	}

	const handlePause = () => {
		// 🐨 Keep remainingMs when pausing
		setTimerState({
			status: 'paused',
			phase: timerState.phase,
			remainingMs: currentMinutes * 60 * 1000,
		})
	}

	const handleComplete = async () => {
		// 🐨 Use createSession to save the session
		const session = await createSession(timerState.phase, currentMinutes)
		setSessions((currentSessions) => [session, ...currentSessions])

		// 🐨 Use getNextPhase to decide the next phase.
		// 🐨 Count all completed focus sessions in `sessions`. Include the current
		//    session when a focus phase has just completed. This is different from
		//    `focusStreak`, which only counts consecutive recent focus sessions.
		const completedFocusSessions = 0
		const nextPhase = getNextPhase(
			timerState.phase,
			completedFocusSessions,
			settings,
		)
		setTimerState({
			status: 'completed',
			phase: nextPhase,
			finishedAt: Date.now(),
		})
	}

	const updateMinutes =
		(key: keyof Settings) => (event: ChangeEvent<HTMLInputElement>) => {
			const nextValue = Number(event.target.value)
			setSettings((currentSettings: Settings) =>
				updateSettings(currentSettings, key, nextValue),
			)
		}

	const applyDefaults = () => {
		// 🐨 Use applySettingsPatch to reset only the minutes
		setSettings((currentSettings: Settings) =>
			applySettingsPatch(currentSettings, {
				focusMinutes: 25,
				shortBreakMinutes: 5,
				longBreakMinutes: 15,
			}),
		)
	}

	return (
		<div className="app">
			<header className="header">
				<div>
					<h1>Focus Timer</h1>
					<p className="muted">Stay on track with focused work sessions.</p>
				</div>
				<div className="pill">{phaseLabel}</div>
			</header>

			<div className="grid">
				<section className="card timer">
					<h2>Timer</h2>
					<div className="timer-display">{displayTime}</div>
					<div className="timer-meta">
						Status: <strong>{timerState.status}</strong>
					</div>
					<div className="button-row">
						<button className="button" onClick={handleStart}>
							Start
						</button>
						<button className="button secondary" onClick={handlePause}>
							Pause
						</button>
						<button className="button" onClick={handleComplete}>
							Complete
						</button>
					</div>
				</section>

				<section className="card">
					<h2>Settings</h2>
					<div className="settings-grid">
						<label className="setting">
							Focus minutes
							<input
								type="number"
								min={1}
								value={settings.focusMinutes}
								onChange={updateMinutes('focusMinutes')}
							/>
						</label>
						<label className="setting">
							Short break minutes
							<input
								type="number"
								min={1}
								value={settings.shortBreakMinutes}
								onChange={updateMinutes('shortBreakMinutes')}
							/>
						</label>
						<label className="setting">
							Long break minutes
							<input
								type="number"
								min={1}
								value={settings.longBreakMinutes}
								onChange={updateMinutes('longBreakMinutes')}
							/>
						</label>
						<label className="setting">
							Long break interval
							<input
								type="number"
								min={1}
								value={settings.longBreakInterval}
								onChange={updateMinutes('longBreakInterval')}
							/>
						</label>
					</div>
					<div className="button-row">
						<button className="button secondary" onClick={applyDefaults}>
							Reset minutes
						</button>
					</div>
				</section>

				<section className="card">
					<h2>Session stats</h2>
					<div className="stats">
						<div>Focus streak: {focusStreak}</div>
						<div>Focus sessions: {sessionsByPhase.focus.length}</div>
						<div>Break sessions: {sessionsByPhase.shortBreak.length}</div>
						<div>Long breaks: {sessionsByPhase.longBreak.length}</div>
					</div>
				</section>

				<section className="card">
					<h2>Recent sessions</h2>
					<ul className="list">
						{sessions.slice(0, 4).map((session) => (
							<li key={session.id} className="list-item">
								<div>
									<strong>{getPhaseLabel(session.phase as TimerPhase)}</strong>
								</div>
								<div className="muted">
									{session.durationMinutes} minutes • {session.startedAt}
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	)
}

export default App
