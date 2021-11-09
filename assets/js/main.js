"use strict";

language("br");
//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})



/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

const rss = new RSS(
	document.querySelector("#rss-feeds"),
	//Change this to your own rss feeds
	"https://feeds.feedburner.com/TechCrunch/startups",
	{
		// how many entries do you want?
		// default: 4
		// valid values: any integer
		limit: 3,


		// will request the API via https
		// default: false
		// valid values: false, true
		ssl: true,

		// outer template for the html transformation
		// default: "<ul>{entries}</ul>"
		// valid values: any string
		layoutTemplate: "<div class='items'>{entries}</div>",

		// inner template for each entry
		// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
		// valid values: any string
		entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',

	}
);
rss.render();


/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
new GitHubCalendar("#github-graph", "IonicaBizau", { responsive: true });


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });


function language(lang) {
	var path;
	if (lang == "br") {
		path = "./json/br-data.json"
	}
	else if (lang == "us") {
		path = "./json/us-data.json";
	}

	fetch(path)
		.then(response => response.text())
		.then(data => {

			var json = JSON.parse(data);
			document.getElementById("function").innerHTML = json.function;
			document.getElementById("title1").innerHTML = json.title1;
			document.getElementById("about").innerHTML = json.about;
			document.getElementById("title2").innerHTML = json.title2;
			document.getElementById("title3").innerHTML = json.title3;
			document.getElementById("title4").innerHTML = json.title4;
			document.getElementById("title5").innerHTML = json.title5;
			document.getElementById("title_lang").innerHTML = json.title_lang;



			var subtitleLangSpan = document.getElementById("subtitle_lang");
			subtitleLangSpan.innerHTML = '<br class="visible-xs"/><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> <i class="far fa-star"></i>';
			var textSubLang = document.createTextNode(json.subtitle_lang);
			subtitleLangSpan.appendChild(textSubLang);

			var extLinkSpan = document.getElementById("ext_link");
			extLinkSpan.innerHTML = '<i class="fas fa-external-link-alt"></i>';
			var extLinkTxt = document.createTextNode(json.ext_link);
			extLinkSpan.appendChild(extLinkTxt);


			for (let i = 0; i < json.courses.length; i++) {

				let result = json.courses[i]
				var courseSpan = document.getElementById("course" + i);
				courseSpan.innerHTML = '';
				var txtCourse = document.createTextNode(result.course);
				courseSpan.appendChild(txtCourse);

				var schoolSpan = document.getElementById("school" + i);
				schoolSpan.innerHTML = '';
				var txtSchool = document.createTextNode(result.school);
				schoolSpan.appendChild(txtSchool);

				var spanYear = document.getElementById("year_course" + i);
				spanYear.innerHTML = '';
				var txtYear = document.createTextNode(" ( " + result.year + " )");
				spanYear.appendChild(txtYear);

			}

			
			for (let i = 0; i < json.profissional_exp.length; i++) {
				let result = json.profissional_exp[i];

				var title = document.getElementById("title_exp" + i);
				title.innerHTML = '';
				var txtTitle = document.createTextNode(result.title_exp + " - ");
				title.appendChild(txtTitle);

				var spanCompany = document.getElementById("company" + i);
				spanCompany.innerHTML = '';
				var txtCompany = document.createTextNode(result.company_exp);
				spanCompany.appendChild(txtCompany);

				var spanYear = document.getElementById("year" + i);
				spanYear.innerHTML = '';
				var txtYear = document.createTextNode(" - ( " + result.date + " )");
				spanYear.appendChild(txtYear);

				document.getElementById("comment" + i).textContent = result.comment;
			}

			for (let i = 0; i < json.skills.length; i++) {
				let result = json.skills[i];

				var level = document.getElementById("skill_lvl" + i);
				level.innerHTML = '';
				var txtLevel = document.createTextNode(result.skill_lvl);
				level.appendChild(txtLevel);	
			}
			

		});

}