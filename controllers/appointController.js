

const createAppoint = async (req,res) =>{
    res.send('create Appointment')
}

const deleteAppoint = async (req,res) =>{
    res.send('Delete Appointment')
}

const getAllAppoint = async (req,res) =>{
    res.send('Get all Appointment')
}

const updateAppoint = async (req,res) =>{
    res.send('update Appointment')
}

const showStats = async (req,res) =>{
    res.send('show stats Appointment')
}



export {createAppoint,deleteAppoint,getAllAppoint,updateAppoint, showStats}