~~~
mkdir unix_tests_permissions
cd /home/joaozinho/unix_tests_permissions

ls -l

touch arquivo_teste.txt

chmod a+rw arquivo_teste.txt
ls -l

chmod a-w arquivo_teste.txt
ls -l

chmod 644 arquivo_teste.txt
ls -l
~~~