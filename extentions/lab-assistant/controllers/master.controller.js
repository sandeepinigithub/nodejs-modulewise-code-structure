module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "lab assistant master" }, { description: "Welcome in master module" }]
    });
}