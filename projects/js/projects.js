

// TODO read the excludes list from a text file.
function isProjectExcluded(projectName) {
   return projectName == "projecttemplate" || projectName == "addExcludedProjectNameHere";
}

// Modified from http://stackoverflow.com/questions/9050763/format-date-in-jquery
// @return year-month-day
function getDate_YMD(d){
    // padding function
    var s = function(a,b) {return(1e15+a+"").slice(-b)};

    // default date parameter
    if (typeof d === 'undefined'){
        d = new Date();
    };

    return d.getFullYear() + '-' +
        s(d.getMonth()+1,2) + '-' +
        s(d.getDate(),2);
}
