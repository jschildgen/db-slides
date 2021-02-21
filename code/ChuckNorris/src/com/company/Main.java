package com.company;

import java.sql.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:postgresql://postgres.fbi.h-da.de/chucknorris",
                    "chucknorris", "chuck555");

            System.out.println("Verbunden mit der ChuckNorris-Datenbank!");

            System.out.print("Suchbegriff (oder leer lassen für zufälligen Witz): ");
            Scanner scan = new Scanner(System.in);
            String suchbegriff = scan.nextLine();

            ResultSet rs;

            if(suchbegriff.isBlank()) {
                /* Zufälligen Witz ausgeben */
                Statement st = conn.createStatement();
                rs = st.executeQuery("SELECT witz_id, witz, aufrufe FROM witze ORDER BY random() LIMIT 1");
            } else {
                /* Stichwortsuche */
                PreparedStatement pst = conn.prepareStatement("SELECT witz_id, witz, aufrufe FROM witze" +
                        " WHERE witz LIKE '%'||?||'%' ORDER BY random() LIMIT 1");
                pst.setString(1, suchbegriff);
                rs = pst.executeQuery();
            }
            if(rs.next()) {
                System.out.printf("%d. %s (%d Aufrufe)\n",
                        rs.getInt(1), rs.getString(2), rs.getInt(3));
                int witz_id = rs.getInt("witz_id");

                /* Aufrufscounter hochzählen */
                PreparedStatement pst = conn.prepareStatement("UPDATE witze SET aufrufe = aufrufe +1" +
                        " WHERE witz_id = ?");
                pst.setInt(1, witz_id);
                pst.executeUpdate();
                pst.close();
            } else {
                System.out.println("Es wurde kein Witz gefunden.");
            }
            rs.close();
            conn.close();
        } catch(SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
