JSLIB_DIR=./src/main/js/lib

init:
	git submodule update --init
	mkdir -p ${JSLIB_DIR}
	rm -rf ./modules/bootstrap/bootstrap/
	cd ./modules/bootstrap/;make bootstrap
	cp -R ./modules/bootstrap/bootstrap/* ${JSLIB_DIR}
	cd ./modules/jquery/;make
	cp ./modules/jquery/dist/* ${JSLIB_DIR}
	cp ./modules/requirejs/require.js ${JSLIB_DIR}

build:
	cp -R ./src/main/* ./www

preview:
	cd ./www;python -m SimpleHTTPServer ${2}
	open -a "Google Chrome" http://localhost:${2}
	
release:
	rm -f ./History.md
	git changelog

.PHONY: init clean release build 
