##############################
# Instale Node 
##############################
node:
	npm install

##############################
# Run all Tests
##############################
test:
	npm run test

##############################
# Run Analytics tests 
##############################
analytics:
	npm run test:analytics

##############################
# Run UI test 
##############################
ui:
	npm run test:ui

##############################
# Run API only 
##############################
api:
	npm run test:api

##############################
# Open Reporter
##############################
report:
	npm run allure:generate-open

##############################
# Run Prettier 
##############################
prettier:
	npx prettier . --write