const originalCohort = ["Idah", "Laletty", "Denis", "Derrick", "Abbie", "Juanita"];
const referenceCopy = [...originalCohort];
referenceCopy.push ("Ian")
console.log(referenceCopy);
const newCohort = ["Matthew", "Imani", "Seth", "Aisha", "Jason", "Japheth", "Ian"];
const softwareCohort = [...originalCohort, ...newCohort];
console.log(softwareCohort);

const defaultSettings = {
    theme: "Stone & Amber",
    debugMode: true,
    cacheLimit: 2048
};

const userProfileCustomization = {
    ...defaultSettings,
    debugMode: false
};

console.log(userProfileCustomization);
