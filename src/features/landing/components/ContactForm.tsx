import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Zod Schema
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Correo electrónico inválido."),
  details: z.string().min(10, "Cuéntanos un poco más sobre tu idea (mínimo 10 caracteres)."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (newContact: FormValues) => {
      // Mocking an API call with JSONPlaceholder
      return axios.post("https://jsonplaceholder.typicode.com/posts", newContact);
    },
    onSuccess: () => {
      form.reset();
      alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    },
    onError: () => {
      alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    }
  });

  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Comienza tu proyecto hoy</h2>
              <p className="text-blue-100">Déjanos tus datos y nos pondremos en contacto contigo para cotizar tu alfombra.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-50">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej. Ana Pérez" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus-visible:ring-white" />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-50">Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="ana@ejemplo.com" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus-visible:ring-white" />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-50">Detalles de tu idea</FormLabel>
                      <FormControl>
                        <textarea 
                          placeholder="Me gustaría una alfombra de 1x1m con el logo de mi empresa..."
                          {...field}
                          className="flex min-h-[120px] w-full rounded-md border bg-white/10 border-white/20 px-3 py-2 text-sm text-white placeholder:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={mutation.isPending}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 text-lg rounded-full mt-4"
                >
                  {mutation.isPending ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
