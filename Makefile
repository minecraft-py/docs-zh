deploy: mkdocs.yml docs/
	@echo [deploy...]
	@git add .
	@git commit -m `date +%Y-%m-%d`
	@echo [push changes...]
	@git push
	@echo [done]

deploy-docs: mkdocs.yml docs/
	@echo [deploy...]
	@mkdocs gh-deploy -m `date +%Y-%m-%d`
	@rm site/ -rf
	@echo [done]
