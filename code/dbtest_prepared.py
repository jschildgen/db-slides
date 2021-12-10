#!/usr/bin/python
import psycopg2

conn = psycopg2.connect(
    database="u1", user="u1",
    password="u1", host="localhost",
    port="5432",
    )

cursor = conn.cursor()

suche = input("Produktsuche: ")

cursor.execute("SELECT bezeichnung, preis FROM webshop.produkte " +
               "WHERE bezeichnung LIKE '%%'|| %(suche)s ||'%%'",
               {"suche":suche})
while True:
  row = cursor.fetchone()
  if not row:
    break
  print("* %s (%.2f EUR)" % (row[0], row[1]))