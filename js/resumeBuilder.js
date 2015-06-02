var bio = {
    'name': 'Bel Jones Echavez',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '639226274180',
        'email': 'zargon234@gmail.com',
        'github': 'fruitspunchs',
        'location': 'Santa Rosa City, Laguna, Philippines'
    },
    'welcomeMessage': 'Hi there!',
    'skills': ['Web Development', 'Desktop and Android Game Development', 'Computer Administration', 'Small Business Management'],
    'biopic': 'images/fry.jpg',
    'display': function display() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(formattedGithub);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedPhoto = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedPhoto);

        var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (skill in bio.skills) {
                $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
            }
        }
    },
    'displayContactFooter': function displayContactFooter() {
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#footerContacts').append(formattedEmail);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#footerContacts').append(formattedMobile);
    }
}

bio.display();
bio.displayContactFooter();

var work = {
    'jobs': [{
        'employer': 'Beez World Net Cafe',
        'title': 'Manager',
        'location': 'Santa Rosa City, Laguna, Philippines',
        'dates': ['March 2009', 'Present'],
        'description': 'Responsibilites: Business Management, Software Deployment, Computer Maintenance'
    }, {
        'employer': 'Tebisoft Games',
        'title': 'Independent Game Developer',
        'location': 'Santa Rosa City, Laguna, Philippines',
        'dates': ['August 2012', "Present"],
        'description': 'Responsibilites: Planning, Coding, Graphics Editing'
    }],
    'display': function display() {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var employerAndTitle = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            employerAndTitle = employerAndTitle + HTMLworkTitle.replace('%data%', work.jobs[job].title);
            $('.work-entry:last').append(employerAndTitle);
            var dates = HTMLworkDates.replace('%data%', work.jobs[job].dates[0] + '-' + work.jobs[job].dates[1]);
            $('.work-entry:last').append(dates);
            var description = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(description);
        }
    },
}

work.display();

var projects = {
    'projects': [{
        'title': 'Slot Machine Advance',
        'dates': ['August 2012', 'October 2012'],
        'description': 'Slot Machine and Video Poker Machine published on Google Play.',
        'images': ['images/slotMachine.png']
    }, {
        'title': 'Ninja Runner',
        'dates': ['April 2015', 'Present'],
        'description': 'Ninja themed runner game for Android. Currently under development.',
        'images': ['images/ninjaRun.png']
    }],
    'display': function display() {
        for (project in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            var title = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(title);
            var dates = HTMLprojectDates.replace('%data%', projects.projects[project].dates[0] + '-' + projects.projects[project].dates[1]);
            $('.project-entry:last').append(dates);
            var description = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(description);

            for (image in projects.projects[project].images) {
                var images = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                $('.project-entry:last').append(images);
            }
        }
    }
}

projects.display();

var education = {
    'schools': [{
        'name': 'Regina Coeli School',
        'location': 'Santa Rosa City, Laguna, Philippines',
        'degree': 'High School Diploma',
        'majors': ['Pre K-12'],
        'dates': ['June 2003', 'March 2007'],
        'url': '#'
    }, {
        'name': 'University of the Philippines, Diliman',
        'location': 'Diliman, Quezon City, Philippines',
        'degree': 'Unfinished',
        'majors': ['Non-major'],
        'dates': ['January 2008', 'December 2009'],
        'url': 'http://www.upd.edu.ph/'
    }],
    "onlineCourses": [{
        'title': 'Front-end Web Developer Nanodegree',
        'school': 'Udacity',
        'dates': ['April 2015', 'Present'],
        'url': 'https://www.udacity.com/'
    }],
    'display': function display() {
        for (school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var name = HTMLschoolName.replace('%data%', education.schools[school].name);
            $('.education-entry:last').append(name);
            var degree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            $('.education-entry:last').append(degree);
            var dates = HTMLschoolDates.replace('%data%', education.schools[school].dates[0] + "-" + education.schools[school].dates[1]);
            $('.education-entry:last').append(dates);
            var location = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(location);

            for (major in education.schools[school].majors) {
                var major = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
                $('.education-entry:last').append(major);
            }
        }

        for (onlineCourse in education.onlineCourses) {
            $('.education-entry:last').append(HTMLonlineClasses);
            var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
            $('.education-entry:last').append(title);
            var school = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
            $('.education-entry:last').append(school);
            var dates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates[0] + "-" + education.onlineCourses[onlineCourse].dates[1]);
            $('.education-entry:last').append(dates);
            var url = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
            $('.education-entry:last').append(url);
        }
    }
}

education.display();

$('#mapDiv').append(googleMap);

function logClicks(x, y) {
    console.log(x + " " + y);
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY)
});
