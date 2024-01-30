const getTareas = (req, res) => {
    res.status(200).json({mensaje: 'Get Tareas'})
}

const createTareas = (req, res) => {
    res.status(201).json({mensaje: `Create Tareas`})
}

const updateTareas = (req, res) => {
    res.status(200).json({mensaje: 'Get Tareas'})
}

const deleteTareas = (req, res) => {
    res.status(200).json({mensaje: 'Get Tareas'})
}

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}