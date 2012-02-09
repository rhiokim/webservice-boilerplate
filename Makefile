git submodule update --init
rmdir  ./modules/bootstrap/bootstrap
cd ./modules/bootstrap/;make bootstrap
cp -R ./modules/bootstrap/bootstrap/* ./www
