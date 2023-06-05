module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "jsc admin" }, { description: "Welcome in jsc admin module" }]
    });
}