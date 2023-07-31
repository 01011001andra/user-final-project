import React from "react";
import { useParams } from "react-router-dom";
import { Layout, MainLayout } from "../../layouts";
import { headSubText } from "../../utils/styles";
import { Gallery } from "./components";

const DetailAcara = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <Layout className="py-28">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col w-full">
            <h1 className={`${headSubText} text-center`}>Maulid Nabi</h1>
            <span className="text-center">Rabu, 23 Mei 2023</span>
          </div>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quod autem a quibusdam ipsa alias doloribus quasi ad. Quas eveniet,
            doloribus vero molestias non, incidunt placeat, velit tempore
            officia suscipit deleniti. Impedit, ullam inventore cumque sit aut
            deleniti doloremque odio, ex deserunt amet officia assumenda nemo?
            Optio ipsa ullam odit excepturi officia laudantium id numquam at
            pariatur voluptatem qui quidem alias tempora quas cupiditate
            voluptates magni consequatur vel expedita, reiciendis saepe eaque,
            nobis eligendi. Nesciunt eum itaque molestiae sequi vitae sapiente
            ipsa esse modi eaque vero? Sapiente, aut voluptatibus a, error
            quibusdam illum reprehenderit totam aspernatur animi sint voluptate
            nobis. Odit sed, nisi id eligendi magnam ratione voluptates
            dignissimos nihil aspernatur ut praesentium incidunt non quibusdam
            maiores in, animi modi est atque expedita saepe cumque sapiente
            quis. Atque illum nam repellat enim dignissimos maiores, fugiat
            nostrum voluptatem temporibus facilis maxime est praesentium.
            Dolorum tempore minima, cumque asperiores totam expedita temporibus!
            Dignissimos voluptate, impedit, amet molestiae quia temporibus eius
            laborum reiciendis omnis ex ipsa totam illo quas pariatur dolore
            inventore nisi voluptas aut veritatis? Repudiandae asperiores magni,
            dignissimos iure quae incidunt. Deserunt deleniti voluptatum
            veritatis optio ratione voluptate eos ipsa, libero, in atque
            provident ipsum quaerat adipisci nemo, quae iste dicta.
          </p>
        </div>
        <Gallery />
      </Layout>
    </MainLayout>
  );
};

export default DetailAcara;
