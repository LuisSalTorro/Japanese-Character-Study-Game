export const HIGHEST_STREAK = "HIGHEST_STREAK"

export const setHighestStreak = streak => dispatch => {
    dispatch({
        type: HIGHEST_STREAK,
        payload: streak,
    })
}