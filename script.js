"use strict";
var _a, _b, _c;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const summaryInput = document.getElementById("summary");
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    if (name && email && phone && skills && experience && education && summary) {
        document.getElementById("outputName").textContent = `Name: ${name}`;
        document.getElementById("outputEmail").textContent = `Email: ${email}`;
        document.getElementById("outputPhone").textContent = `Phone: ${phone}`;
        document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
        document.getElementById("outputExperience").textContent = `Experience: ${experience}`;
        document.getElementById("outputEducation").textContent = `Education: ${education}`;
        document.getElementById("outputSummary").textContent = `Summary: ${summary}`;
        document.getElementById("resumeContainer").style.display = "block";
    }
    else {
        alert("Please fill out all fields!");
    }
});
// Edit button functionality
(_b = document.getElementById("editButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    const outputName = document.getElementById("outputName");
    const outputEmail = document.getElementById("outputEmail");
    const outputPhone = document.getElementById("outputPhone");
    const outputSkills = document.getElementById("outputSkills");
    const outputExperience = document.getElementById("outputExperience");
    const outputEducation = document.getElementById("outputEducation");
    const outputSummary = document.getElementById("outputSummary");
    // Make the resume fields editable
    outputName.contentEditable = "true";
    outputEmail.contentEditable = "true";
    outputPhone.contentEditable = "true";
    outputSkills.contentEditable = "true";
    outputExperience.contentEditable = "true";
    outputEducation.contentEditable = "true";
    outputSummary.contentEditable = "true";
    // Show the Update button and hide the Edit button
    document.getElementById("editButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";
});
// Update button functionality
(_c = document.getElementById("updateButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    const outputName = document.getElementById("outputName");
    const outputEmail = document.getElementById("outputEmail");
    const outputPhone = document.getElementById("outputPhone");
    const outputSkills = document.getElementById("outputSkills");
    const outputExperience = document.getElementById("outputExperience");
    const outputEducation = document.getElementById("outputEducation");
    const outputSummary = document.getElementById("outputSummary");
    // Save changes and make the fields non-editable again
    outputName.contentEditable = "false";
    outputEmail.contentEditable = "false";
    outputPhone.contentEditable = "false";
    outputSkills.contentEditable = "false";
    outputExperience.contentEditable = "false";
    outputEducation.contentEditable = "false";
    outputSummary.contentEditable = "false";
    // Hide the Update button and show the Edit button
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
    // Alert the user that the changes have been updated
    alert("Your changes have been updated!");
});
