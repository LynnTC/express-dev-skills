const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSk,
    create,
    delete: killSkill,
};


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSk(req, res) {
    res.render('skills/new');
  }

function create(req, res){
   Skill.create(req.body);
   res.redirect('/skills');
}

function killSkill(req, res){
    Skill.killOne(req.params.id); 
    res.redirect('/skills');
}