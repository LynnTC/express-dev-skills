const skills = [
    {skill: "HTML", proficiency: true},
    {skill: "Javascript", proficiency: true},
    {skill: "Express", proficiency: false},
]

module.exports = {
    getAll,
    getOne
};

function getAll(){
    return skills;
}

function getOne(id){
    return skills.find(skill => skills.skill === id);
}