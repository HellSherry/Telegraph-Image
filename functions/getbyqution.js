export async function onRequest(context) {
     return fetch('http://www.sqlpub.com:8081/sql/execute?sql=select%20*%20from%20cslg%20where%20questions%20如图%20%27%25hello%25%27&dbId=mysql_mysql_sqlpub_com_3306_sherrycslg_sherrycslg&token=be21d52c97854653b882fcc3bdaadd64');
}
