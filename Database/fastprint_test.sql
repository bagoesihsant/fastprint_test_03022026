--
-- PostgreSQL database dump
--

\restrict Npe2WPC1wi05h5kfgt5fO0Erak1MzJX7GFobvRvOAHNdgDCmU7vBzcTsBP6DsLf

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: kategori; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kategori (
    id_kategori bigint NOT NULL,
    nama_kategori character varying(255)
);


ALTER TABLE public.kategori OWNER TO postgres;

--
-- Name: kategori_id_kategori_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.kategori ALTER COLUMN id_kategori ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.kategori_id_kategori_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: produk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produk (
    id_produk bigint NOT NULL,
    nama_produk character varying(255),
    harga bigint,
    kategori_id bigint,
    status_id bigint
);


ALTER TABLE public.produk OWNER TO postgres;

--
-- Name: produk_id_produk_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.produk ALTER COLUMN id_produk ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.produk_id_produk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status (
    id_status bigint NOT NULL,
    nama_status character varying(255)
);


ALTER TABLE public.status OWNER TO postgres;

--
-- Name: status_id_status_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.status ALTER COLUMN id_status ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.status_id_status_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: kategori; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kategori (id_kategori, nama_kategori) FROM stdin;
1	L QUEENLY
2	L MTH AKSESORIS (IM)
3	L MTH TABUNG (LK)
4	SP MTH SPAREPART (LK)
5	CI MTH TINTA LAIN (IM)
6	L MTH AKSESORIS (LK)
7	S MTH STEMPEL (IM)
\.


--
-- Data for Name: produk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produk (id_produk, nama_produk, harga, kategori_id, status_id) FROM stdin;
1	ALCOHOL GEL POLISH CLEANSER GP-CLN01	12500	1	1
2	ALUMUNIUM FOIL ALL IN ONE BULAT 23mm IM	1000	2	1
3	ALUMUNIUM FOIL ALL IN ONE BULAT 30mm IM	1000	2	1
4	ALUMUNIUM FOIL ALL IN ONE SHEET 250mm IM	12500	2	2
5	ALUMUNIUM FOIL HDPE/PE BULAT 23mm IM	12500	2	1
6	ALUMUNIUM FOIL HDPE/PE BULAT 30mm IM	1000	2	1
7	ALUMUNIUM FOIL HDPE/PE SHEET 250mm IM	13000	2	2
8	ALUMUNIUM FOIL PET SHEET 250mm IM	1000	2	2
9	ARM PENDEK MODEL U	13000	2	1
10	ARM SUPPORT KECIL	13000	3	2
11	ARM SUPPORT KOTAK PUTIH	13000	2	2
12	ARM SUPPORT PENDEK POLOS	13000	3	1
13	ARM SUPPORT S IM	1000	2	2
14	ARM SUPPORT T (IMPORT)	13000	2	1
15	ARM SUPPORT T - MODEL 1 ( LOKAL )	10000	3	1
16	BLACK LASER TONER FP-T3 (100gr)	13000	2	2
17	BODY PRINTER CANON IP2770	500	4	1
18	BODY PRINTER T13X	15000	4	1
19	BOTOL 1000ML BLUE KHUSUS UNTUK EPSON R1800/R800 - 4180 IM (T054920)	10000	5	1
20	BOTOL 1000ML CYAN KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4120 IM (T054220)	10000	5	2
21	BOTOL 1000ML GLOSS OPTIMIZER KHUSUS UNTUK EPSON R1800/R800/R1900/R2000/IX7000/MG6170 - 4100 IM (T054020)	1500	5	1
22	BOTOL 1000ML L.LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0599 IM	1500	5	2
23	BOTOL 1000ML LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0597 IM	1500	5	2
24	BOTOL 1000ML MAGENTA KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	1000	5	1
25	BOTOL 1000ML MATTE BLACK KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 3503 IM (T054820)	1500	5	2
26	BOTOL 1000ML ORANGE KHUSUS UNTUK EPSON R1900/R2000 IM - 4190 (T087920)	1500	5	1
27	BOTOL 1000ML RED KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4170 IM (T054720)	1000	5	2
28	BOTOL 1000ML YELLOW KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4160 IM (T054420)	1500	5	2
29	BOTOL KOTAK 100ML LK	1000	6	1
30	BOTOL KOTAK 10ML IM	1000	7	2
31	BOTOL 1000ML LIME KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	12500	5	1
32	BOTOL 1000ML MAROON KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	13500	5	1
33	BOTOL 1000ML VELVET KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	13500	5	1
34	BOTOL 1000ML VANTA BLACK KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	15000	5	1
36	BOTOL 1000ML RAD PINK KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)	12500	5	1
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status (id_status, nama_status) FROM stdin;
1	bisa dijual
2	tidak bisa dijual
\.


--
-- Name: kategori_id_kategori_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kategori_id_kategori_seq', 7, true);


--
-- Name: produk_id_produk_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produk_id_produk_seq', 36, true);


--
-- Name: status_id_status_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.status_id_status_seq', 2, true);


--
-- Name: kategori kategori_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kategori
    ADD CONSTRAINT kategori_pkey PRIMARY KEY (id_kategori);


--
-- Name: produk produk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk
    ADD CONSTRAINT produk_pkey PRIMARY KEY (id_produk);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id_status);


--
-- PostgreSQL database dump complete
--

\unrestrict Npe2WPC1wi05h5kfgt5fO0Erak1MzJX7GFobvRvOAHNdgDCmU7vBzcTsBP6DsLf

