const style = document.createElement("style")
style.type = "text/css"
style.id = "webext-at-link-style"
style.innerHTML = `
.theme--dark:root .webext-at-link {
	div :last-child {
		/* https://stackoverflow.com/a/39776303 */
		color: transparent;
		text-shadow: 0 0 0 rgb(212, 219, 226);

	}
	:hover {
		background-color: rgb(28, 39, 50);
	}
}
.theme--dim:root .webext-at-link {
	div :last-child {
		color: transparent;
		text-shadow: 0 0 0 rgb(215, 221, 228);
	}
	:hover {
		background-color: rgb(38, 53, 68);
	}

}
.theme--light:root .webext-at-link {
	div :last-child {
		color: transparent;
		text-shadow: 0 0 0 rgb(37, 51, 66)
	}
	:hover {
		background-color: rgb(241, 243, 245);
	}
}
`
document.body.appendChild(style)
