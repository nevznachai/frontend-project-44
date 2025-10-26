install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
.PHONY:
	lint lint-fix

lint:
	@npx eslint .

lint-fix:
	@npx eslint . --fix
