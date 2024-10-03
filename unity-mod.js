function UnityUrlFix(url) {
	console.log("--fx--UnityUrlFix--", url);

	if (url.includes("unity3d.com")) {
        // New url to be loaded instead 
		url = "null.json?" + url;
	}

	return url;
}
