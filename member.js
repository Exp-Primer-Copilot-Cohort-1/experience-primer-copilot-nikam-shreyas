function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.createElement("div");
    skillsMember.setAttribute("class", "skills-member");
    skills.appendChild(skillsMember);
    var skillsMemberName = document.createElement("h3");
    skillsMemberName.setAttribute("class", "skills-member-name");
    skillsMemberName.innerHTML = "Member Name";
    skillsMember.appendChild(skillsMemberName);
    var skillsMemberSkill = document.createElement("p");
    skillsMemberSkill.setAttribute("class", "skills-member-skill");
    skillsMemberSkill.innerHTML = "Member Skill";
    skillsMember.appendChild(skillsMemberSkill);
}