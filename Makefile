JSLIB_DIR=./www/js/lib

init:
	git submodule update --init
	mkdir -p ${JSLIB_DIR}
	rm -rf ./modules/bootstrap/bootstrap/
	cd ./modules/bootstrap/;make bootstrap
	cp -R ./modules/bootstrap/bootstrap/* ${JSLIB_DIR}
	cd ./modules/jquery/;make
	cp ./modules/jquery/dist/* ${JSLIB_DIR}
	cp ./modules/requirejs/require.js ${JSLIB_DIR}
	

.PHONY: init clean 
