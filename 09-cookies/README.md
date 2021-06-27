# Cookies

cookie is a header

The browser give the cookie special meaning.  

the browser will auto send the cookie

## browser sends to cookie

- domain
- path
- expires

## Set cookie

- Server
- client

## Set-Cookie

header the server sends to tell the client to store a cookie

## Store in cookie

make sure they have expiration

- session id 
- jwt token

## cookies are automatically sent

             CSRF

1. bank.com - jwt - post bank.com/transfer
2. evil.com - cannot access bank.com-jwt
  - redirect bank.com/transfer


bank.com              evil.com               

s_id
jwt


			Person in the middle
			
			https - TLS
			  
			 public-private  
			   p

public key			         private key
browser -------------------> gmail.com


             Certificate Authority
			 
			 - godaddy - gmail.com is yours, public
			 - let's encrypt
			 
			 
## session

```
{
	1: {id: 1},
	2: {firstName: 'omer'},
	3: {firstName: 'avital'}		
}
```

cookies: session_id=2