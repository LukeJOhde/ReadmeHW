const names = ["None",
  "Apache",
  "GNU GPL 3.0",
  "GNU GPL 2.0",
  "GNU LGPL",
  "MIT",
  "BSD 2",
  "BSD 3",
  "Boost",
  "Creative Commons",
  "Eclipse",
  "GNU Affero",
  "Mozilla",
  "Unlicense"];
const badgeUrls = ["",
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"];
const links = ["No License",
  "https://choosealicense.com/licenses/apache-2.0/",
  "https://choosealicense.com/licenses/gpl-3.0/",
  "https://choosealicense.com/licenses/gpl-2.0/",
  "https://choosealicense.com/licenses/lgpl-3.0/",
  "https://choosealicense.com/licenses/mit/",
  "https://choosealicense.com/licenses/bsd-2-clause/",
  "https://choosealicense.com/licenses/bsd-3-clause/",
  "https://choosealicense.com/licenses/bsl-1.0/",
  "https://choosealicense.com/licenses/cc0-1.0/",
  "https://choosealicense.com/licenses/epl-1.0/",
  "https://choosealicense.com/licenses/agpl-3.0/",
  "https://choosealicense.com/licenses/mpl-2.0/",
  "https://choosealicense.com/licenses/unlicense/"];
function renderLicenseBadge(license) {
  for (let i = 0; i < names.length; i++) {
    if ((license) == (names[i])) {
      return badgeUrls[i];
    }
  }
}
function renderLicenseLink(license) {
  for (let i = 0; i < names.length; i++) {
    if ((license) == (names[i])) {
      return links[i];
    }
  }
}
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return licenseSection = `## License
    ${renderLicenseLink(license)}`;
  }
}
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributers}
## Tests
${data.test}
## Questions
Github: ${data.github}
Email: ${data.email}
`;
}
module.exports = generateMarkdown;