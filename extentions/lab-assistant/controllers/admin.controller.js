module.exports.getData = (req, res) => {
    res.json({
        posts: [{ title: "lab assistant admin" }, { description: "Welcome in lab-assistant admin module" }]
    });
}