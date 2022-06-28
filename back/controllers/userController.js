// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private
export const getUserProfile = (req, res) => {
    const user = {
        age: 20,
        name: "Andrey"
    }

    res.json(user)
}