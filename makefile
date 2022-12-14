install: #установить зависимости
	npm c
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish: 
	npm publish --dry-run
lint: #запуск линтера
	npx eslint
