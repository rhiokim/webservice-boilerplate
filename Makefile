init:
	git submodule update --init
	rm -rf ./modules/bootstrap/bootstrap
	cd ./modules/bootstrap/;make bootstrap
	cp -R ./modules/bootstrap/bootstrap/* ./www
	
build: 
	cd ./modules/bootstrap/;make

.PHONY: init build copy
