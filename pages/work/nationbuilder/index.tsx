import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { cx } from '@/lib/utils';
import pageData from '@/data/nationbuilder.json';
import workData from '@/data/work.json';
import Intro from '@/components/Intro';
import Meta from '@/components/Meta';
import Section from '@/components/Section';
import EntryList from '@/components/EntryList';

type NationBuilderProps = {
  title: string;
  description: string;
  meta: { [key: string]: string };
};

const NationBuilder: NextPage<NationBuilderProps> = ({
  title,
  description,
  meta,
}) => {
  const recommendations = workData.recommendations.filter(
    (r) => r.company === 'NationBuilder',
  );
  return (
    <>
      <Intro title={title} description={description} />

      <Section>
        <a
          href="https://nationbuilder.com"
          className="inline-flex float-right mb-8"
        >
          <span className="sr-only">NationBuilder</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="100%"
            viewBox="0 0 3881 1000"
            fill="none"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1148 362h45.6l150 193.6V362h48.4v280h-41.2l-154.4-199.2V642H1148V362zm440.8 191.6c-6.13-2.4-13.4-4.4-21.8-6-8.4-1.6-17.27-2.4-26.6-2.4-15.2 0-27.07 2.933-35.6 8.8-8.53 5.867-12.8 13.867-12.8 24v.8c0 10.133 3.93 17.867 11.8 23.2 7.87 5.333 17.53 8 29 8 8 0 15.4-1.067 22.2-3.2 6.8-2.133 12.73-5.133 17.8-9s9-8.533 11.8-14c2.8-5.467 4.2-11.533 4.2-18.2v-12zm-1.2 88.4v-26c-7.2 8.533-16.4 15.733-27.6 21.6-11.2 5.867-24.8 8.8-40.8 8.8-10.13 0-19.73-1.4-28.8-4.2-9.07-2.8-17-6.933-23.8-12.4-6.8-5.467-12.27-12.267-16.4-20.4-4.13-8.133-6.2-17.533-6.2-28.2v-.8c0-11.733 2.13-21.933 6.4-30.6 4.27-8.667 10.2-15.867 17.8-21.6 7.6-5.733 16.67-10 27.2-12.8 10.53-2.8 21.93-4.2 34.2-4.2 12.8 0 23.67.8 32.6 2.4 8.93 1.6 17.53 3.733 25.8 6.4v-4c0-14.667-4.47-25.867-13.4-33.6-8.93-7.733-21.8-11.6-38.6-11.6-12 0-22.67 1.2-32 3.6-9.33 2.4-18.8 5.6-28.4 9.6l-13.2-38.8c11.73-5.333 23.73-9.6 36-12.8 12.27-3.2 27.07-4.8 44.4-4.8 31.47 0 54.8 7.8 70 23.4 15.2 15.6 22.8 37.533 22.8 65.8V642h-48zm176.4 3.6c-8.8 0-16.93-1.067-24.4-3.2-7.47-2.133-13.93-5.6-19.4-10.4-5.47-4.8-9.67-11.133-12.6-19-2.93-7.867-4.4-17.667-4.4-29.4V472.4h-26.8v-41.6h26.8v-58h48.4v58h56.8v41.6h-56.8V576c0 9.333 2.27 16.067 6.8 20.2 4.53 4.133 10.93 6.2 19.2 6.2 10.4 0 20.4-2.4 30-7.2v39.6c-6.13 3.467-12.67 6.133-19.6 8-6.93 1.867-14.93 2.8-24 2.8zm96-214.8h48.4V642H1860V430.8zm-2-78.4h52v46h-52v-46zm214.8 252.4c9.87 0 18.73-1.8 26.6-5.4 7.87-3.6 14.6-8.467 20.2-14.6 5.6-6.133 9.87-13.267 12.8-21.4 2.93-8.133 4.4-16.733 4.4-25.8v-.8c0-9.333-1.6-18.133-4.8-26.4-3.2-8.267-7.67-15.467-13.4-21.6-5.73-6.133-12.53-11-20.4-14.6-7.87-3.6-16.6-5.4-26.2-5.4-9.6 0-18.33 1.8-26.2 5.4-7.87 3.6-14.6 8.4-20.2 14.4s-9.87 13.133-12.8 21.4c-2.93 8.267-4.4 16.933-4.4 26v.8c0 9.333 1.6 18.067 4.8 26.2 3.2 8.133 7.67 15.333 13.4 21.6 5.73 6.267 12.53 11.2 20.4 14.8 7.87 3.6 16.47 5.4 25.8 5.4zm-.8 42c-16 0-30.87-2.867-44.6-8.6s-25.6-13.533-35.6-23.4c-10-9.867-17.8-21.467-23.4-34.8-5.6-13.333-8.4-27.467-8.4-42.4v-.8c0-15.2 2.87-29.467 8.6-42.8 5.73-13.333 13.6-25 23.6-35 10-10 21.87-17.933 35.6-23.8 13.73-5.867 28.73-8.8 45-8.8s31.27 2.867 45 8.6 25.6 13.6 35.6 23.6c10 10 17.8 21.6 23.4 34.8 5.6 13.2 8.4 27.4 8.4 42.6v.8c0 14.933-2.87 29.067-8.6 42.4-5.73 13.333-13.6 25-23.6 35-10 10-21.93 17.933-35.8 23.8-13.87 5.867-28.93 8.8-45.2 8.8zm162.4-216h48.4v32.8c3.43-5.02 7.24-9.767 11.4-14.2 4.13-4.4 8.93-8.333 14.4-11.8 5.47-3.467 11.47-6.2 18-8.2 6.53-2 13.93-3 22.2-3 24 0 42.53 7.333 55.6 22s19.6 34.4 19.6 59.2V642h-48.4V522c0-16.533-3.93-29.267-11.8-38.2-7.87-8.933-19-13.4-33.4-13.4-14.13 0-25.6 4.6-34.4 13.8-8.8 9.2-13.2 22.067-13.2 38.6V642h-48.4V430.8zM2618 598.4c16.8 0 30-3.2 39.6-9.6 9.6-6.4 14.4-16 14.4-28.8v-.8c0-12-4.73-21.267-14.2-27.8-9.47-6.533-23.93-9.8-43.4-9.8h-78v76.8h81.6zM2603.6 480c16 0 28.8-3.133 38.4-9.4 9.6-6.267 14.4-15.8 14.4-28.6v-.8c0-11.2-4.2-19.933-12.6-26.2-8.4-6.267-20.6-9.4-36.6-9.4h-70.8V480h67.2zM2488 362h125.6c32.27 0 56.67 8.267 73.2 24.8 12.53 12.533 18.8 28 18.8 46.4v.8c0 8.533-1.13 16.067-3.4 22.6-2.27 6.533-5.2 12.267-8.8 17.2a62.425 62.425 0 01-12.8 13c-4.93 3.733-9.93 6.933-15 9.6 8.27 2.933 15.8 6.333 22.6 10.2 6.8 3.867 12.67 8.467 17.6 13.8 4.93 5.333 8.73 11.6 11.4 18.8 2.67 7.2 4 15.6 4 25.2v.8c0 12.533-2.47 23.6-7.4 33.2-4.93 9.6-11.93 17.6-21 24-9.07 6.4-20 11.267-32.8 14.6-12.8 3.333-26.93 5-42.4 5H2488V362zm356 284.4c-24 0-42.53-7.333-55.6-22s-19.6-34.4-19.6-59.2V430.8h48.4v120c0 16.533 3.93 29.267 11.8 38.2 7.87 8.933 19 13.4 33.4 13.4 14.13 0 25.6-4.6 34.4-13.8 8.8-9.2 13.2-22.067 13.2-38.6V430.8h48.4V642H2910v-32.8c-6.93 10.133-15.6 18.867-26 26.2-10.4 7.333-23.73 11-40 11zm178-215.6h48.4V642H3022V430.8zm-2-78.4h52v46h-52v-46zm116.4-2.4h48.4v292h-48.4V350zm210.4 254.4c8 0 15.73-1.6 23.2-4.8 7.47-3.2 14-7.8 19.6-13.8 5.6-6 10.07-13.133 13.4-21.4s5-17.467 5-27.6v-.8c0-10.133-1.67-19.4-5-27.8-3.33-8.4-7.8-15.533-13.4-21.4-5.6-5.867-12.13-10.4-19.6-13.6-7.47-3.2-15.2-4.8-23.2-4.8-8.27 0-16.07 1.533-23.4 4.6-7.33 3.067-13.8 7.533-19.4 13.4-5.6 5.867-10 13-13.2 21.4-3.2 8.4-4.8 17.8-4.8 28.2v.8c0 10.133 1.6 19.4 4.8 27.8 3.2 8.4 7.6 15.533 13.2 21.4 5.6 5.867 12.07 10.4 19.4 13.6 7.33 3.2 15.13 4.8 23.4 4.8zm-11.6 42c-12.53 0-24.67-2.4-36.4-7.2-11.73-4.8-22.13-11.867-31.2-21.2-9.07-9.333-16.4-20.8-22-34.4-5.6-13.6-8.4-29.2-8.4-46.8v-.8c0-17.6 2.73-33.2 8.2-46.8 5.47-13.6 12.73-25.067 21.8-34.4 9.07-9.333 19.53-16.4 31.4-21.2 11.87-4.8 24.07-7.2 36.6-7.2 17.33 0 31.73 3.733 43.2 11.2 11.47 7.467 21.07 16.133 28.8 26V350h48.4v292h-48.4v-35.2c-7.73 10.933-17.4 20.267-29 28-11.6 7.733-25.93 11.6-43 11.6zm325.6-124.8c-.8-7.733-2.53-15-5.2-21.8-2.67-6.8-6.27-12.667-10.8-17.6-4.53-4.933-9.93-8.867-16.2-11.8s-13.4-4.4-21.4-4.4c-14.93 0-27.27 5.133-37 15.4s-15.67 23.667-17.8 40.2h108.4zm-48 125.2c-15.2 0-29.4-2.667-42.6-8-13.2-5.333-24.67-12.8-34.4-22.4-9.73-9.6-17.4-21.133-23-34.6-5.6-13.467-8.4-28.333-8.4-44.6v-.8c0-15.2 2.53-29.467 7.6-42.8 5.07-13.333 12.2-25 21.4-35s20.07-17.867 32.6-23.6c12.53-5.733 26.4-8.6 41.6-8.6 16.8 0 31.53 3.067 44.2 9.2 12.67 6.133 23.2 14.4 31.6 24.8 8.4 10.4 14.73 22.467 19 36.2 4.27 13.733 6.4 28.2 6.4 43.4 0 2.133-.07 4.333-.2 6.6-.13 2.267-.33 4.6-.6 7h-155.2c2.67 17.333 9.53 30.6 20.6 39.8 11.07 9.2 24.47 13.8 40.2 13.8 12 0 22.4-2.133 31.2-6.4s17.47-10.533 26-18.8l28.4 25.2c-10.13 12-22.2 21.6-36.2 28.8-14 7.2-30.73 10.8-50.2 10.8zm144.8-216h48.4v47.6c6.67-16 16.13-28.8 28.4-38.4 12.27-9.6 27.73-14 46.4-13.2V478h-2.8c-10.67 0-20.4 1.733-29.2 5.2s-16.4 8.667-22.8 15.6c-6.4 6.933-11.33 15.667-14.8 26.2-3.47 10.533-5.2 22.733-5.2 36.6V642h-48.4V430.8z"
                fill="currentColor"
              />
              <path
                d="M502.5 1001c276.971 0 501.5-224.529 501.5-501.5S779.471-2 502.5-2 1 222.529 1 499.5 225.529 1001 502.5 1001z"
                fill="#fff"
              />
              <path
                d="M301.718 612.707v-39.934h78.852l25.68-147.94h-78.185v-40.842h85.173l20.896-127.973h48.309l-21.805 127.973H583.13l20.896-127.973h48.271l-20.896 127.973h72.789v40.842h-79.761l-25.68 147.94h79.094v39.934h-85.186l-21.805 130.695h-47.368l21.805-130.695H422.765L400.96 743.402h-47.331l20.896-130.695h-72.807zm274.486-187.874h-123.44l-23.968 147.94h123.44l23.968-147.94z"
                fill="#000"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M502.499 950.848c137.351 0 267.24-62.539 352.878-169.93l-33.859-26.998c-77.427 97.082-194.842 153.625-319.019 153.625v43.303z"
                fill="#D0021B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M855.374 780.919c85.638-107.392 117.715-247.943 87.154-381.85l-42.22 9.627c27.63 121.065-1.366 248.143-78.793 345.225l33.859 26.998z"
                fill="#790412"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M942.531 399.068C911.97 265.162 822.068 152.441 698.324 92.85l-18.786 39.006c111.886 53.878 193.144 155.774 220.774 276.839l42.219-9.627z"
                fill="#6F6F96"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M698.324 92.85c-123.744-59.591-267.906-59.591-391.65 0l18.787 39.006c111.885-53.878 242.191-53.878 354.077 0l18.786-39.006z"
                fill="#60BAD5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M306.674 92.85C182.93 152.44 93.029 265.162 62.467 399.068l42.22 9.627c27.63-121.065 108.888-222.961 220.773-276.839L306.674 92.85z"
                fill="#1498BE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.468 399.069c-30.561 133.907 1.515 274.458 87.154 381.85l33.858-26.998c-77.427-97.082-106.423-224.16-78.793-345.225l-42.219-9.627z"
                fill="#899E2A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M149.624 780.918c85.638 107.391 215.527 169.93 352.878 169.93v-43.303c-124.177 0-241.592-56.543-319.019-153.625l-33.859 26.998z"
                fill="#F9DA1C"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h3881v1000H0z" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <Meta
          items={Object.entries(meta).map(([title, description]) => {
            return {
              title,
              description,
            };
          })}
        />
      </Section>

      <Section heading="Recommendations">
        <EntryList>
          {recommendations.map((item, index) => {
            return (
              <div key={index} className="flex flex-col sm:flex-row">
                <div className="w-28 flex-shrink-0">
                  <div className="mb-4">
                    <Image
                      src={item.thumbnail}
                      alt={`${item.name} portrait`}
                      width={48}
                      height={48}
                      className="rounded-md w-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p style={{ textIndent: '-.65rem' }}>“{item.text}”</p>
                  <p
                    className={cx(
                      'mt-4',
                      'text-gray-600',
                      'dark:text-gray-300',
                    )}
                  >
                    &mdash; {item.name}, {item.title}, {item.company}
                  </p>
                </div>
              </div>
            );
          })}
        </EntryList>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...pageData,
    },
  };
};

export default NationBuilder;
