module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "jsc master" }, { description: "Welcome in master module" }]
    });
}