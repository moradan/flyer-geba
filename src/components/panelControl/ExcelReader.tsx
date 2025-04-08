'use client'; // If you're using Next.js App Router

import React, { useRef } from 'react';
import ExcelJS from 'exceljs';
import { PartidoExcel } from '@/model/Partido';
import AdministradorDatos from '@/utils/AdministradorDatos';
import Log from '@/utils/Log';

export default function ExcelReader() {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const debug = document.getElementById('DebugLog');
    var consola = new Log(debug);

    const file = event.target.files?.[0];
    if (!file) return;
    consola.log(`Abriendo el archivo: ${file}`);

    const buffer = await file.arrayBuffer(); // Convert File to ArrayBuffer
    event.target.value = ''; // Borramos el nombre del archivo para que en un futuro se vuelva a disparar onChange.

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.worksheets[0]; // Read the first sheet

    const rows: any[] = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      rows.push(row.values);
    });

    if (rows.length === 0) {
      alert('El archivo de Excel esta vacio.');
    }

    const encabezadosEsperados = ['Fecha', 'Hora', 'L/V', 'Local', 'Visitante', 'Competencia'];

    const encabezados = rows[0];
    consola.log(`Primer fila del archivo: ${encabezados}`);
    const esValido = encabezadosEsperados.every((esperado, indice) => { return encabezados[indice + 1] === esperado });
    if (!esValido) {
      alert("La hoja de excel no tiene el formato que esperabamos. No puedo leer los partidos.");
      return;
    }

    const partidosExcel: PartidoExcel[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      const partido = new PartidoExcel();
      partido.fecha = row[1];
      partido.horario = row[2];
      partido.localia = row[3];
      partido.equipoLocal = row[4];
      partido.equipoVisitante = row[5];
      partido.competencia = row[6];

      partidosExcel.push(partido);
    }

    AdministradorDatos.cargarPartidosDeExcel(partidosExcel);
  };

  return (
    <input id="campoImportar" type="file" accept=".xlsx" onChange={handleFileChange} style={{ display: 'none' }} />
  );
}
