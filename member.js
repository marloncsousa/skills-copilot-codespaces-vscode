function skillsMember () {
  var skills = document.getElementById('skills')
  var skillsMember = document.getElementById('skillsMember')
  var skillsMemberValue = skills.options[skills.selectedIndex].value
  if (skillsMemberValue === 'yes') {
    skillsMember.style.display = 'block'
  } else {
    skillsMember.style.display = 'none'
  }
}