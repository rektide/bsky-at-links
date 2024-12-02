const style = document.createElement("style")
style.type = "text/css"
style.id = "webext-at-link-style"
style.innerHTML = `
.theme--dark:root .webext-at-link {
	div :last-child {
		/* https://angel-rs.github.io/css-color-filter-generator/ */
		/* rgb(212, 219, 226) */
		filter: brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(3666%) hue-rotate(179deg) brightness(94%) contrast(89%);
	}
	:hover {
		background-color: rgb(28, 39, 50);
	}
}
.theme--dim:root .webext-at-link {
	div :last-child {
		/* rgb(215, 221, 228) */
		filter: brightness(0) saturate(100%) invert(93%) sepia(19%) saturate(82%) hue-rotate(172deg) brightness(94%) contrast(90%);
	}
	:hover {
		background-color: rgb(38, 53, 68);
	}

}
.theme--light:root .webext-at-link {
	div :last-child {
		/* rgb(37, 51, 66) */
		filter: brightness(0) saturate(100%) invert(13%) sepia(17%) saturate(1425%) hue-rotate(169deg) brightness(97%) contrast(83%);
	}
	:hover {
		background-color: rgb(241, 243, 245);
	}
}
`
document.body.appendChild(style)
