package org.pedronunes.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CatalogApplication {

    public static void main(String[] args) {
        SpringApplication.run(CatalogApplication.class, args);
    }

    @Autowired
    CatalogObjectRepository catalogObjectRepositoryRepository;

    @Bean
    @ConditionalOnProperty(prefix = "app", name = "db.init.enabled", havingValue = "true")
    public CommandLineRunner demoCommandLineRunner() {
        return args -> {

            System.out.println("Running.....");

            CatalogObject b1 = new CatalogObject(1,"https://images.tcdn.com.br/img/img_prod/917466/2_cadeiras_berlim_madeira_macica_383_1_7281908649f63415e50fa6e6e4fb01c1.jpg",
                    "Chair",
                    90.00F, 40F, 8.5F);

            CatalogObject b2 = new CatalogObject(2,"https://images.tcdn.com.br/img/img_prod/807429/sofa_6_lugares_retratil_de_canto_com_chaise_d_310_x_175_cm_madrid_linho_off_white_ns_861_1_feb6095bdd3ec9dfc7650d128f7585e7.jpg",
                    "Sofa",
                    5225.00F,2000F, 39F);

            CatalogObject b3 = new CatalogObject(3,"https://samsungbrshop.vtexassets.com/arquivos/ids/226920-600-auto?v=638404990382000000&width=600&height=auto&aspect=true",
                    "Cellphone",
                    3022.75F,2.54F, 0.18F);

            CatalogObject b4 = new CatalogObject(4,"https://eletronicasantana.vteximg.com.br/arquivos/ids/101235-1000-1000/MOUSE-USB-OPTICO-1000DPI-PRETO-M90-LOGITECH-1.jpg?v=638042867318600000",
                    "Mouse",
                    322.41F,18F, 0.79F);

            CatalogObject b5 = new CatalogObject(5,"https://samsungbrshop.vtexassets.com/arquivos/ids/212598/02-SA365_SMG_BarosaBlack_1000x1000_20230613.jpg?v=638235815386200000",
                    "Refrigerator",
                    4500.00F,1450F, 82F);


            catalogObjectRepositoryRepository.saveAll(List.of(b1, b2, b3, b4, b5));

        };
    }

}

