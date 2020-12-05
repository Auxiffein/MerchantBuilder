document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle');
	themeToggle.addEventListener('click', toggleTheme);
		function toggleTheme() {
			document.body.classList.toggle("light");
			document.body.classList.toggle("dark");
				localStorage.setItem(
				"colorTheme",
				document.body.classList.contains("dark") ? "dark" : "light"
				);
			var theme_glyphicon = document.getElementById("theme-glyphicon");
			if(theme_glyphicon.classList.contains("glyphicon-eye-open")) {
				theme_glyphicon.classList.remove("glyphicon-eye-open");
				theme_glyphicon.classList.add("glyphicon-eye-close");
			}
			else if (theme_glyphicon.classList.contains("glyphicon-eye-close")) {
			theme_glyphicon.classList.remove("glyphicon-eye-close");
			theme_glyphicon.classList.add("glyphicon-eye-open");
			}
		}
		
    if (localStorage.getItem("colorTheme") === "dark") {
        toggleTheme();
    } else if (
        localStorage.getItem("colorTheme") !== "light" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
        toggleTheme();
    }
	});
