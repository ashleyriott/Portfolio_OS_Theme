# Test Coverage Analysis

## Current State

The project has **1 test file** (`src/App.test.js`) containing **1 test case** — the default Create React App placeholder test. This test checks for a "learn react" link that doesn't exist in the actual App component, meaning it likely **fails** if run.

**Coverage by category:**

| Category | Source Files | Test Files | Coverage |
|---|---|---|---|
| Utility functions | 1 | 0 | 0% |
| Redux reducers | 3 | 0 | 0% |
| Redux actions | 3 | 0 | 0% |
| Document classes | 3 | 0 | 0% |
| Container components | 5 | 0 | 0% |
| UI components | 25+ | 0 | 0% |
| Configuration/data | 4 | 0 | 0% |
| Routing | 1 | 0 | 0% |

The CI/CD pipeline (`.github/workflows/build.yml`) does **not** run tests — it only runs `npm run build`.

---

## Priority 1: Utility Functions (Highest Value, Lowest Effort)

**File:** `src/utils/services/common-util-servies.js`

These are pure functions with no dependencies on React or Redux, making them the easiest and highest-value targets for testing.

### `filterObjectList(objectList, key, value)`
Test cases needed:
- Returns matching objects when key/value pair exists
- Returns empty array when no match found
- Returns empty array for `undefined`, `null`, or empty input
- Works with different key names and value types

### `filterObjectListById(objectList, id)`
Test cases needed:
- Returns the first matching object when id exists
- Returns empty object `{}` when id is not found
- Returns empty object for `undefined`, `null`, or empty input
- Handles duplicate IDs (returns first match)

### `replaceObjectListByKey(objectList, object, key)`
Test cases needed:
- Replaces object in list when key matches
- Pushes object into list when list is empty
- Does **not** add object when key doesn't match any existing item (current behavior — potential bug worth validating)
- Mutates the original array (side effect worth documenting via tests)

---

## Priority 2: Redux Reducers (High Value, Low Effort)

Reducers are pure functions (state + action → new state), making them straightforward to test without any mocking.

### `systemStateReducer` (`src/utils/reducers/system.reducer.js`)
Test cases needed:
- Returns initial state (isLocked: true, isShutDown: false, isDesktop: false)
- SET_STATE with "isDesktop" → sets isDesktop true, isLocked false, isShutDown false
- SET_STATE with "isShutDown" → sets isShutDown true, isLocked false, isDesktop false
- SET_STATE with "isLocked" → sets isLocked true (but note: the reducer sets isLocked to false then overrides, so "isLocked" actually results in isLocked: true — this edge case is worth verifying)
- Unknown action type returns state unchanged

### `settingsStateReducer` (`src/utils/reducers/settings.reducer.js`)
Test cases needed:
- Returns initial state with default wallpaper, isMute false, wifiEnabled true, airplaneMode true
- TOGGLE_MUTE flips isMute
- TOGGLE_WIFI flips wifiEnabled
- TOGGLE_AIRPLANE_MODE flips airplaneMode
- CHANGE_WALLPAPER with valid ID updates currentWallpaper and currentWallpaperId
- CHANGE_WALLPAPER with invalid ID falls back to default wallpaper
- Double-toggle returns to original state
- Unknown action type returns state unchanged

### `appStateReducer` (`src/utils/reducers/app.reducer.js`)
Test cases needed:
- Returns initial state
- APP_INIT populates apps array from config with correct properties
- APP_CLICK on closed app → opens it (isOpened: true, isMinimized: false)
- APP_CLICK on open, visible app → minimizes it (isMinimized: true)
- APP_CLICK on open, minimized app → restores it (isMinimized: false)
- MINIMIZE sets isMinimized to true
- MAXIMIZE toggles isMaximized
- CLOSE resets isOpened, isMinimized, isMaximized to false
- Unknown action type returns state unchanged

---

## Priority 3: Redux Action Creators (Medium Value, Low Effort)

### `app.action.js`
- `initApplications()` returns correct action type
- `handleApplicationClick(app)` returns action with app payload
- `handleAppFunctions(app, type)` returns action with correct type and app

### `system.action.js`
- `setSystemState(systemState)` returns SET_STATE action with systemState payload

### `settingsaction.js`
- `toggleSettings(toggleKey)` returns action with correct type
- `changeDesktopBackground(wallpaperId)` returns CHANGE_WALLPAPER action with wallpaperId

---

## Priority 4: Document Classes (Medium Value, Very Low Effort)

### `AppStateDocument`
- Constructor initializes all properties to correct defaults (empty strings, false booleans, empty object)

### `SystemStateDocument`
- Constructor sets isLocked: true, isShutDown: false, isDesktop: false

### `SettingDocument`
- Constructor sets default wallpaper, isMute: false, wifiEnabled: true, airplaneMode: true

---

## Priority 5: Container Components (High Value, Medium Effort)

These require a Redux store mock and React Testing Library.

### `windows.container.js`
Test cases needed:
- Renders lock screen when systemState.isLocked is true
- Renders desktop when systemState.isDesktop is true
- Renders shutdown screen when systemState.isShutDown is true
- Renders 404 (BSOD) screen on unknown routes

### `desktop.container.js`
- Renders with wallpaper background from settings state
- Dispatches APP_INIT on mount
- Passes correct props to Desktop component

### `lockScreen.container.js`
- Renders lock screen landing by default
- Toggles to sign-in screen on interaction
- Dispatches SET_STATE to transition to desktop on sign-in

### `shutDown.container.js`
- Renders shutdown screen with Windows logo
- Power button click dispatches transition back to lock screen

---

## Priority 6: UI Components (High Value, Higher Effort)

### Core interactive components (test first):

**`appComponent.js` (Window Frame)**
- Renders title bar with app name
- Minimize button dispatches MINIMIZE action
- Maximize button dispatches MAXIMIZE action
- Close button dispatches CLOSE action
- Renders sub-component content
- Draggable behavior works

**`startMenu.js`**
- Renders app list from Redux state
- App click dispatches APP_CLICK
- Power menu shows lock/shutdown options
- Lock dispatches SET_STATE with isLocked
- Shutdown dispatches SET_STATE with isShutDown

**`taskBar.js`**
- Renders open apps as taskbar icons
- Clock component displays
- Start button toggles start menu

**`signIn.lockScreen.js`**
- Password input accepts text
- Sign-in button dispatches desktop state transition
- Empty password is handled

### Application components (test second):

**`mail.application.js`**
- Form renders with name, email, subject, message fields
- Form validation (required fields)
- EmailJS integration called on submit
- Success/error feedback displayed

**`background.settings.js`**
- Renders wallpaper thumbnails
- Clicking wallpaper dispatches CHANGE_WALLPAPER
- Current wallpaper is visually indicated

**`actionCenter.js`**
- WiFi toggle dispatches TOGGLE_WIFI
- Mute toggle dispatches TOGGLE_MUTE
- Airplane mode toggle dispatches TOGGLE_AIRPLANE_MODE
- Toggle states reflect Redux state

---

## Priority 7: Configuration Validation (Low Effort, Defensive)

### `apps.config.js`
- All apps have required properties (id, name, icon, order)
- No duplicate IDs
- All referenced icons/images exist

### `user.config.js`
- Required fields (firstName, lastName, email) are populated
- Social links are valid URLs
- Experience/education arrays are non-empty

---

## CI/CD Recommendation

Update `.github/workflows/build.yml` to include a test step:

```yaml
- name: Run tests
  run: npm test -- --ci --coverage --watchAll=false
```

This ensures tests run on every push and PR, and generates a coverage report.

---

## Suggested Implementation Order

1. **Fix `App.test.js`** — the existing test references "learn react" which doesn't exist in the actual App component. Fix or replace it.
2. **Utility functions** — pure functions, zero setup needed, high confidence gains.
3. **Redux reducers** — pure functions, cover core business logic.
4. **Action creators** — trivial to test, complete the Redux layer coverage.
5. **Document classes** — quick constructor tests.
6. **Container components** — requires Redux mock store setup, but covers critical routing logic.
7. **Interactive UI components** — appComponent, startMenu, taskBar, signIn form.
8. **Application components** — mail form, settings, action center.
9. **Add tests to CI/CD pipeline.**

---

## Potential Bugs to Validate Through Tests

1. **`replaceObjectListByKey` mutates the input array** — this side effect could cause unexpected behavior in the Redux reducers that use it, since reducers should produce new state, not mutate existing state.
2. **`replaceObjectListByKey` silently ignores objects with no matching key** — if the key doesn't match, the original list is returned unchanged with no indication of failure.
3. **`systemStateReducer` SET_STATE behavior with "isLocked"** — the reducer creates a new `SystemStateDocument` (isLocked: true), then sets isLocked to false, then sets `action.systemState` to true. If `action.systemState === "isLocked"`, the final result is isLocked: true, but the intermediate logic is confusing and worth verifying.
4. **`appStateReducer` APP_CLICK on non-existent app** — `filterObjectListById` returns `{}`, and the reducer then tries to read `isOpened` on an empty object (undefined), which takes the else branch and sets properties on the empty object. This would add a malformed app entry.
5. **`settingsStateReducer` CHANGE_WALLPAPER with undefined result** — the ternary fallback checks `newWallpaper !== undefined && newWallpaper[0] !== undefined` but `Array.filter` always returns an array (never undefined), so the first check is redundant. The real risk is an empty array where `newWallpaper[0]` is undefined.
