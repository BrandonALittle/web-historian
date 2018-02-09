// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

var archive = require('../helpers/archive-helpers');
archive.readListOfUrls(archive.downloadUrls);

//crontab script scheduler wakes up htmlFetcher
// wakes up
// helper functions needed :
// readUrlList
// isUrlInArchive
// downloadUrl

