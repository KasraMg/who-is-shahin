import i18n from "@/i18n/index";
import { Formik } from "formik";
import { registerSchema, registerSchemaFa } from "@/Validations/rules";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const Form = () => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={
        i18n.language == "fa" ? registerSchemaFa : registerSchema
      }
      onSubmit={(values, { resetForm }) => {
        toast.success(
          i18n.language == "fa" ? "ایمیل ارسال شد  " : "Email Was Send",
          {
            position: "top-right",
            style: {
              background: "#007aff",
              color: "white",
            },
          }
        );
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <section className="grid font-swap gap-6">
            <label className="text-[#727272]" htmlFor="">
              {t("footer.lable1")} *
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-gray-400"
              placeholder={t("footer.placeHolder1")}
            />
            {touched.name && errors.name && (
              <span className="text-red-600">{errors.name}</span>
            )}
          </section>
          <section className="grid font-swap gap-6 my-8">
            <label className="text-[#727272]" htmlFor="">
              {t("footer.lable2")} *
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-gray-400"
              placeholder={t("footer.placeHolder2")}
            />
            {touched.email && errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </section>
          <section className="grid font-swap gap-6">
            <label className="text-[#727272]" htmlFor="">
              {t("footer.lable3")} *
            </label>
            <input
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-gray-400"
              placeholder={t("footer.placeHolder3")}
            />
            {touched.message && errors.message && (
              <span className="text-red-600">{errors.message}</span>
            )}
          </section>

          <button
            type="submit"
            className={`disabled:opacity-50 bg-red-600 rounded-md md:w-full font-swap text-white py-2 mt-8  px-6`}
          >
            {t("footer.button")}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
