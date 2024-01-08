const skills = [
    {skill: "HTML", proficiency: true},
    {skill: "Javascript", proficiency: true},
    {skill: "Express", proficiency: false},
]

module.exports = {
    getAll,
    getOne,
    create,
    killOne,
};

function getAll(){
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.skill === id);
}

function create(skill){
    skill.proficiency = true;
    skills.push(skill);
}

function killOne(id){
    const idx = skills.findIndex(skill => skill.skill === id);
    skills.splice(idx, 1);
}