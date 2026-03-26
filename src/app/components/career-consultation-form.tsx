import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Send, Monitor, MessageSquare, Clock, ChevronLeft } from "lucide-react";


interface CareerConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
    utms?: {
    utm_source?: string | null;
    utm_campaign?: string | null;
    utm_medium?: string | null;
    utm_content?: string | null;
    utm_term?: string | null;
    };
}

export function CareerConsultationForm({
  open,
  onOpenChange,
  utms,
}: CareerConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    challenge: "",
    lastSalary: "",
    timeframe: "",
    contactMethod: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const getStoredUtms = () => {
  const saved = localStorage.getItem("utms");
  if (!saved) return {};

  const params = new URLSearchParams(saved);

  return {
    utm_source: params.get("utm_source"),
    utm_campaign: params.get("utm_campaign"),
    utm_medium: params.get("utm_medium"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
  };
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const finalUtms = utms?.utm_source ? utms : getStoredUtms();
    const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        ...finalUtms, // 👈 troca aqui
        createdAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error();

    setSuccess(true); // 👈 aqui muda a tela

  } catch (error) {
    alert("Erro ao enviar formulário");
  }
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-[1fr,400px] gap-0">
          {/* Formulário */}
          <div className="p-8">
            <DialogHeader>
              <button
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-2 text-sm text-gray-600 mb-6 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Início
              </button>
              <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                Vamos conversar sobre
                <br />o próximo passo da sua carreira
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Preencha o formulário abaixo e um especialista entrará em
                contato para entender sua situação e orientar você com clareza
                e estratégia.
              </DialogDescription>
            </DialogHeader><br />

            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  ✅ Mensagem enviada com sucesso!
                </h2>
                <p className="text-gray-600 mb-6">
                  Em breve um especialista entrará em contato com você.
                </p>

                <Button onClick={() => onOpenChange(false)}>
                  Fechar
                </Button>
              </div>
            ) : ( <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Qual seu maior desafio hoje?</Label>
                <Select
                  value={formData.challenge}
                  onValueChange={(value) =>
                    setFormData({ ...formData, challenge: value })
                  }
                >
                  <SelectTrigger id="challenge">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transicao">Transição de carreira</SelectItem>
                    <SelectItem value="promocao">Buscar promoção</SelectItem>
                    <SelectItem value="recolocacao">Recolocação no mercado</SelectItem>
                    <SelectItem value="desenvolvimento">
                      Desenvolvimento profissional
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastSalary">
                  Sua última remuneração na faixa de:
                </Label>
                <Select
                  value={formData.lastSalary}
                  onValueChange={(value) =>
                    setFormData({ ...formData, lastSalary: value })
                  }
                >
                  <SelectTrigger id="lastSalary">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-3k">Até R$ 3.000</SelectItem>
                    <SelectItem value="3k-6k">R$ 3.000 - R$ 6.000</SelectItem>
                    <SelectItem value="6k-10k">R$ 6.000 - R$ 10.000</SelectItem>
                    <SelectItem value="10k-15k">R$ 10.000 - R$ 15.000</SelectItem>
                    <SelectItem value="acima-15k">Acima de R$ 15.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">
                  Em quanto tempo você gostaria de estar em uma nova posição?
                </Label>
                <Select
                  value={formData.timeframe}
                  onValueChange={(value) =>
                    setFormData({ ...formData, timeframe: value })
                  }
                >
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imediato">Imediatamente</SelectItem>
                    <SelectItem value="1-3-meses">1 a 3 meses</SelectItem>
                    <SelectItem value="3-6-meses">3 a 6 meses</SelectItem>
                    <SelectItem value="6-12-meses">6 a 12 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMethod">
                  Como prefere ser contatado(a)?
                </Label>
                <Select
                  value={formData.contactMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contactMethod: value })
                  }
                >
                  <SelectTrigger id="contactMethod">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="telefone">Telefone</SelectItem>
                    <SelectItem value="email">E-mail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos um pouco sobre sua situação profissional atual e como podemos te ajudar..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>)}
          </div>

          {/* Painel de Informações */}
          <div className="bg-blue-50 p-8 border-l border-blue-100">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Atendimento Online
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        100% digital para todo o Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                      <p className="text-sm font-medium text-gray-900">
                        (11) 95159-8050
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Fale conosco agora
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Clique no WhatsApp e fale com um especialista
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Horário de atendimento:
                </p>
                <p className="text-sm text-gray-600">
                  Segunda à sexta, 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}