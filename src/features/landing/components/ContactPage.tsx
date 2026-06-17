import * as React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
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

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Correo electrónico inválido."),
  phone: z.string().min(8, "Introduce un número de teléfono válido."),
  message: z.string().min(5, "El mensaje debe tener al menos 5 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (newContact: FormValues) => {
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
    <section className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden flex items-center">
      


      <div className="container mx-auto px-6 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Columna Izquierda: Información de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Comienza tu<br />
              proyecto hoy
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-md font-medium">
              Estamos listos para ayudarte a crear la alfombra perfecta para tu espacio. Contáctanos y te atenderemos.
            </p>

            {/* Enlace de Teléfono estilo Figma */}
            <a 
              href="https://wa.me/584248491881" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit transition-transform hover:translate-x-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#22c55e] flex items-center justify-center text-white shadow-md shadow-emerald-100 transition-colors group-hover:bg-[#16a34a]">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <span className="text-slate-800 font-bold text-lg md:text-xl group-hover:text-emerald-600 transition-colors">
                +58 4248491881
              </span>
            </a>
          </motion.div>

          {/* Columna Derecha: Tarjeta Azul del Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#3b5edd] rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-blue-100 max-w-md mx-auto lg:mr-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Campo Nombre */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-blue-50 text-xs font-semibold uppercase tracking-wider">Nombre</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Tu nombre" 
                            {...field} 
                            className="bg-white/15 border-transparent text-white placeholder:text-blue-200 focus-visible:ring-white h-11 rounded-xl" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-200 text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Campo Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-blue-50 text-xs font-semibold uppercase tracking-wider">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Tu Email" 
                            {...field} 
                            className="bg-white/15 border-transparent text-white placeholder:text-blue-200 focus-visible:ring-white h-11 rounded-xl" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-200 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Campo Teléfono */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-blue-50 text-xs font-semibold uppercase tracking-wider">Teléfono</FormLabel>
                        <FormControl>
                          <Input 
                            type="text" 
                            placeholder="+58 123456789" 
                            {...field} 
                            className="bg-white/15 border-transparent text-white placeholder:text-blue-200 focus-visible:ring-white h-11 rounded-xl" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-200 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Campo Mensaje */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-blue-50 text-xs font-semibold uppercase tracking-wider">Mensaje</FormLabel>
                        <FormControl>
                          <textarea 
                            placeholder="Deseo realizar..."
                            {...field}
                            className="flex min-h-[100px] w-full rounded-xl border border-transparent bg-white/15 px-3 py-2 text-sm text-white placeholder:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </FormControl>
                        <FormMessage className="text-red-200 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Botón de Enviar Naranja estilo Figma */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={mutation.isPending}
                    className="w-full bg-[#f58220] text-white hover:bg-[#d9721a] text-base font-bold rounded-full h-11 shadow-md mt-4 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {mutation.isPending ? "Enviando..." : "Enviar"}
                  </Button>

                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
