install: #установить зависимости
	npm c
brain-games:
	node bin/brain-games.js
publish: 
	npm publish --dry-run
