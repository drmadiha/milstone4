document.getElementById("generate")?.addEventListener("click", function () {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const skills = skillsInput.value;
  const experience = experienceInput.value;
  const education = educationInput.value;
  const summary = summaryInput.value;

  if (name && email && phone && skills && experience && education && summary) {
      (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
      (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
      (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
      (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = `Skills: ${skills}`;
      (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = `Experience: ${experience}`;
      (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = `Education: ${education}`;
      (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = `Summary: ${summary}`;

      (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
  } else {
      alert("Please fill out all fields!");
  }
});

// Edit button functionality
document.getElementById("editButton")?.addEventListener("click", function () {
  const outputName = document.getElementById("outputName") as HTMLElement;
  const outputEmail = document.getElementById("outputEmail") as HTMLElement;
  const outputPhone = document.getElementById("outputPhone") as HTMLElement;
  const outputSkills = document.getElementById("outputSkills") as HTMLElement;
  const outputExperience = document.getElementById("outputExperience") as HTMLElement;
  const outputEducation = document.getElementById("outputEducation") as HTMLElement;
  const outputSummary = document.getElementById("outputSummary") as HTMLElement;

  // Make the resume fields editable
  outputName.contentEditable = "true";
  outputEmail.contentEditable = "true";
  outputPhone.contentEditable = "true";
  outputSkills.contentEditable = "true";
  outputExperience.contentEditable = "true";
  outputEducation.contentEditable = "true";
  outputSummary.contentEditable = "true";

  // Show the Update button and hide the Edit button
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "none";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "inline-block";
});

// Update button functionality
document.getElementById("updateButton")?.addEventListener("click", function () {
  const outputName = document.getElementById("outputName") as HTMLElement;
  const outputEmail = document.getElementById("outputEmail") as HTMLElement;
  const outputPhone = document.getElementById("outputPhone") as HTMLElement;
  const outputSkills = document.getElementById("outputSkills") as HTMLElement;
  const outputExperience = document.getElementById("outputExperience") as HTMLElement;
  const outputEducation = document.getElementById("outputEducation") as HTMLElement;
  const outputSummary = document.getElementById("outputSummary") as HTMLElement;

  // Save changes and make the fields non-editable again
  outputName.contentEditable = "false";
  outputEmail.contentEditable = "false";
  outputPhone.contentEditable = "false";
  outputSkills.contentEditable = "false";
  outputExperience.contentEditable = "false";
  outputEducation.contentEditable = "false";
  outputSummary.contentEditable = "false";

  // Hide the Update button and show the Edit button
  (document.getElementById("editButton") as HTMLButtonElement).style.display = "inline-block";
  (document.getElementById("updateButton") as HTMLButtonElement).style.display = "none";

  // Alert the user that the changes have been updated
  alert("Your changes have been updated!");
});
