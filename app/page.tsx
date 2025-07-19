"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, Plus, X, Check, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type Screen =
  | "welcome"
  | "login"
  | "verification"
  | "payment"
  | "account"
  | "servers-empty"
  | "servers-list"
  | "add-server"
  | "activity"
  | "tables"
  | "add-table"
  | "subscription-history"
  | "profile-settings"

export default function RestaurantApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome")
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showServersMenu, setShowServersMenu] = useState(false)

  const StatusBar = () => {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        setCurrentTime(timeString)
      }

      updateTime()
      const interval = setInterval(updateTime, 1000)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className="flex justify-between items-center text-white text-sm font-medium px-4 py-2">
        <span>{currentTime}</span>
        <div></div>
      </div>
    )
  }

  const Header = ({
    title,
    showBack = true,
    showMenu = false,
    onMenuClick,
  }: {
    title: string
    showBack?: boolean
    showMenu?: boolean
    onMenuClick?: () => void
  }) => (
    <div className="flex items-center justify-between px-4 py-4 text-white">
      {showBack && (
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => setCurrentScreen("welcome")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      )}
      <h1 className="text-lg font-semibold">{title}</h1>
      {showMenu && (
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>
      )}
    </div>
  )

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="BIENVENUE" showBack={false} />
      <div className="px-4 text-center text-white text-sm mb-6">un message general de bienvenue</div>

      <div className="px-4">
        <Card className="bg-white/95 backdrop-blur-sm rounded-3xl p-6">
          <div className="flex mb-6">
            <Button
              variant="ghost"
              className="flex-1 text-purple-600 bg-purple-100 rounded-full"
              onClick={() => setCurrentScreen("login")}
            >
              Se connecter
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full ml-2">
              Créer un compte
            </Button>
          </div>

          <div className="space-y-4">
            <Input placeholder="Nom de votre établissement" className="rounded-xl border-gray-200" />
            <Select>
              <SelectTrigger className="rounded-xl border-gray-200">
                <SelectValue placeholder="Type d'établissement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
                <SelectItem value="cafe">Café</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="flex-1 rounded-xl border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <div className="w-2 h-4 bg-orange-500"></div>
                      <div className="w-2 h-4 bg-white border-t border-b border-gray-300"></div>
                      <div className="w-2 h-4 bg-green-500"></div>
                    </div>
                    <SelectValue placeholder="Pays" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ci">Côte d'Ivoire</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="flex-1 rounded-xl border-gray-200">
                  <SelectValue placeholder="Ville" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abidjan">Abidjan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input placeholder="Nombre de serveur" className="rounded-xl border-gray-200" />

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 flex-1">
                <div className="flex">
                  <div className="w-2 h-4 bg-orange-500"></div>
                  <div className="w-2 h-4 bg-white border-t border-b border-gray-300"></div>
                  <div className="w-2 h-4 bg-green-500"></div>
                </div>
                <span className="text-sm">+225</span>
              </div>
              <Input placeholder="Contact" className="flex-1 rounded-xl border-gray-200" />
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Nom de l'administrateur du compte</p>
              <Input placeholder="Entre le nom" className="rounded-xl border-gray-200" />
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Adresse email</p>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Entre le nom" className="pl-10 rounded-xl border-gray-200" />
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full py-3 mt-6"
              onClick={() => setCurrentScreen("payment")}
            >
              ENREGISTRER
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="BIENVENUE" />
      <div className="px-4 text-center text-white text-sm mb-6">un message general de bienvenue</div>

      <div className="px-4">
        <Card className="bg-white/95 backdrop-blur-sm rounded-3xl p-6">
          <div className="flex mb-6">
            <Button className="flex-1 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full">
              Se connecter
            </Button>
            <Button
              variant="ghost"
              className="flex-1 text-purple-600 bg-purple-100 rounded-full ml-2"
              onClick={() => setCurrentScreen("welcome")}
            >
              Créer un compte
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-3">Entrer l'adresse e-mail de connexion</p>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                <Input placeholder="Entrer l'adresse e-mail" className="pl-12 rounded-xl border-gray-200" />
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full py-3"
              onClick={() => setCurrentScreen("verification")}
            >
              ENVOYER LE CODE
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  const VerificationScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="BIENVENUE" />
      <div className="px-4 text-center text-white text-sm mb-6">un message general de bienvenue</div>

      <div className="px-4">
        <Card className="bg-white/95 backdrop-blur-sm rounded-3xl p-6">
          <div className="flex mb-6">
            <Button
              variant="ghost"
              className="flex-1 text-purple-600 bg-purple-100 rounded-full"
              onClick={() => setCurrentScreen("login")}
            >
              Se connecter
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full ml-2"
              onClick={() => setCurrentScreen("welcome")}
            >
              Créer un compte
            </Button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Entrer le code à 5 chiffres que vous
              <br />
              avez reçu au mail suivant
            </p>
            <p className="text-purple-600 font-medium">mail@gmail.com</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-3">Entrer le code</p>
              <Input className="rounded-xl border-gray-200 text-center text-lg tracking-widest" />
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 cursor-pointer">Renvoyer le mail</p>
              <p className="text-sm text-gray-600 cursor-pointer">Modifier le mail</p>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full py-3"
              onClick={() => setCurrentScreen("servers-empty")}
            >
              VÉRIFIER
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  const PaymentScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="Paiement" />
      <div className="px-4 text-center text-white text-sm mb-6">un message general de bienvenue</div>

      <div className="px-4">
        <Card className="bg-white/95 backdrop-blur-sm rounded-3xl p-6">
          <div className="bg-purple-100 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Montant à débité</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">49.000</span>
              <span className="text-sm text-gray-600">Fr</span>
              <span className="text-sm text-gray-400 ml-auto">54.000 CFA</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-3">Sélectionner les moyen de paiement</p>
              <Select>
                <SelectTrigger className="rounded-xl border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <SelectValue placeholder="WAVE" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wave">WAVE</SelectItem>
                  <SelectItem value="orange">Orange Money</SelectItem>
                  <SelectItem value="mtn">MTN Money</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-3">Entrer le numéro de compte à débité</p>
              <Input placeholder="+225 0759028434" className="rounded-xl border-gray-200" />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full py-3 mt-8"
              onClick={() => setCurrentScreen("servers-empty")}
            >
              VALIDÉ
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  const AccountScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <div className="relative">
        <Header title="Compte" showMenu={true} onMenuClick={() => setShowAccountMenu(!showAccountMenu)} />

        {showAccountMenu && (
          <div className="absolute top-16 right-4 bg-gray-800 rounded-lg p-2 z-10 min-w-48">
            <div className="text-white text-xs mb-2">
              <p>Code De Connexion</p>
              <p className="text-gray-300">#357B200H00</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white text-sm">MODIFIER</span>
              <Switch checked={true} />
            </div>
            <div className="text-white text-sm py-2 border-t border-gray-600">DÉSACTIVER L'ACCÈS</div>
            <div className="text-white text-sm py-2 border-t border-gray-600">SUPPRIMER LE COMPTE</div>
            <div
              className="text-white text-sm py-2 border-t border-gray-600 cursor-pointer"
              onClick={() => setCurrentScreen("profile-settings")}
            >
              PARAMÈTRES DU COMPTE
            </div>
          </div>
        )}

        <div className="px-4 mb-6">
          <h2 className="text-white text-2xl font-bold mb-1">Cissé idriss</h2>
          <p className="text-white/80 text-sm">Montre 1</p>
          <div className="flex items-center gap-2 mt-2">
            <Switch checked={true} />
          </div>
        </div>

        <div className="flex gap-2 px-4 mb-6">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => setCurrentScreen("activity")}
          >
            Aujourd'hui
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-full px-6">
            Cette Semaine
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-full px-6">
            Ce Mois
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-3xl p-6 mt-8">
        <div className="text-center text-gray-500 mt-20">
          <p className="text-lg">Aucune alert pour</p>
          <p className="text-lg">aujourd'hui</p>
        </div>
      </div>
    </div>
  )

  const ServersEmptyScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <div className="relative">
        <Header title="Compte" showMenu={true} onMenuClick={() => setShowServersMenu(!showServersMenu)} />

        {showServersMenu && (
          <div className="absolute top-16 right-4 bg-gray-800 rounded-lg p-2 z-10 min-w-48">
            <div className="text-white text-sm py-2 cursor-pointer" onClick={() => setCurrentScreen("tables")}>
              AJOUTER UNE TABLE
            </div>
            <div
              className="text-white text-sm py-2 border-t border-gray-600 cursor-pointer"
              onClick={() => setCurrentScreen("add-server")}
            >
              AJOUTER UN SERVEUR
            </div>
            <div
              className="text-white text-sm py-2 border-t border-gray-600 cursor-pointer"
              onClick={() => setCurrentScreen("subscription-history")}
            >
              HISTORIQUE D'ABONNEMENT
            </div>
          </div>
        )}

        <div className="px-4 mb-6">
          <h2 className="text-white text-2xl font-bold mb-1">RESTO LE BRENUSS</h2>
          <p className="text-white/80 text-sm">EX : 12/10/2026</p>
        </div>

        <div className="flex gap-2 px-4 mb-6">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => setCurrentScreen("servers-list")}
          >
            Les serveurs
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-full px-6">
            Menu
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-3xl p-6 mt-8">
        <div className="text-center mt-20">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 text-lg">Ajouter votre premier</p>
          <p className="text-gray-600 text-lg">serveur pour commencer</p>
        </div>
      </div>
    </div>
  )

  const AddServerScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="Ajouter un serveur" />

      <div className="flex justify-center py-8">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Apple Watch"
            width={120}
            height={120}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="flex-1 bg-white rounded-t-3xl p-6">
        <h3 className="text-purple-600 text-xl font-semibold mb-6 text-center">Information</h3>

        <div className="space-y-4">
          <Input placeholder="Nom et prenom du serveur" className="rounded-xl border-gray-200" />

          <Select>
            <SelectTrigger className="rounded-xl border-gray-200">
              <SelectValue placeholder="Gens" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="homme">Homme</SelectItem>
              <SelectItem value="femme">Femme</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Numero" className="rounded-xl border-gray-200" />

          <div className="mt-6">
            <p className="text-gray-600 text-sm mb-3">Donner un nom à la montre</p>
            <Input placeholder="EX:   A1 ou montre 01" className="rounded-xl border-gray-200" />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full py-3 mt-8"
            onClick={() => setCurrentScreen("servers-list")}
          >
            ENREGISTRER
          </Button>
        </div>
      </div>
    </div>
  )

  const ActivityScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="Compte" />

      <div className="px-4 mb-6">
        <h2 className="text-white text-2xl font-bold mb-1">Cissé idriss</h2>
        <p className="text-white/80 text-sm">Montre 1</p>
        <div className="flex items-center gap-2 mt-2">
          <Switch checked={true} />
        </div>
      </div>

      <div className="flex gap-2 px-4 mb-6">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Aujourd'hui</Button>
        <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-full px-6">
          Cette Semaine
        </Button>
        <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-full px-6">
          Ce Mois
        </Button>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-3xl p-4">
        <div className="space-y-4">
          <div className="text-sm text-gray-500 mb-2">Lundi 17 , Juin , 2025</div>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">14</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Demande l'addition</h4>
                <p className="text-sm text-gray-300">En cours il y a 3 minutes</p>
              </div>
              <X className="w-5 h-5 text-red-400" />
            </div>
          </Card>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">11</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Appelle Client</h4>
                <p className="text-sm text-gray-300">Effectué il y a 3 minutes</p>
              </div>
              <Check className="w-5 h-5 text-green-400" />
            </div>
          </Card>

          <div className="text-sm text-gray-500 mb-2 mt-6">Mardi 18 , Juin , 2025</div>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">18</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Demande l'addition</h4>
                <p className="text-sm text-gray-300">Effectué il y a 3 minutes</p>
              </div>
              <Check className="w-5 h-5 text-green-400" />
            </div>
          </Card>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Demande l'addition</h4>
                <p className="text-sm text-gray-300">En cours il y a 2 jours</p>
              </div>
              <X className="w-5 h-5 text-red-400" />
            </div>
          </Card>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">7</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Demande l'addition</h4>
                <p className="text-sm text-gray-300">Effectué le 10/09/24</p>
              </div>
              <Check className="w-5 h-5 text-green-400" />
            </div>
          </Card>

          <div className="text-sm text-gray-500 mb-2 mt-6">Mercredi 19 , Juin , 2025</div>

          <Card className="bg-gray-700 text-white p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Demande l'addition</h4>
                <p className="text-sm text-gray-300">En cours il y a 2 jours</p>
              </div>
              <X className="w-5 h-5 text-red-400" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  const ServersListScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="Compte" showMenu={true} onMenuClick={() => setShowServersMenu(!showServersMenu)} />

      {showServersMenu && (
        <div className="absolute top-16 right-4 bg-gray-800 rounded-lg p-2 z-10 min-w-48">
          <div className="text-white text-sm py-2 cursor-pointer" onClick={() => setCurrentScreen("tables")}>
            AJOUTER UNE TABLE
          </div>
          <div
            className="text-white text-sm py-2 border-t border-gray-600 cursor-pointer"
            onClick={() => setCurrentScreen("add-server")}
          >
            AJOUTER UN SERVEUR
          </div>
          <div
            className="text-white text-sm py-2 border-t border-gray-600 cursor-pointer"
            onClick={() => setCurrentScreen("subscription-history")}
          >
            HISTORIQUE D'ABONNEMENT
          </div>
        </div>
      )}

      <div className="px-6 mb-6">
        <h2 className="text-white text-2xl font-bold mb-1">RESTO LE BRENUSS</h2>
        <p className="text-white/80 text-sm">EX : 12/10/2026</p>
      </div>

      <div className="px-6 mb-8">
        <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1">
          <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full py-3 shadow-lg">
            Les serveurs
          </Button>
          <Button
            variant="ghost"
            className="flex-1 text-white hover:bg-white/10 rounded-full py-3"
            onClick={() => setCurrentScreen("servers-empty")}
          >
            Menu
          </Button>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {/* Serveur 1 - Cissé idriss */}
        <Card className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white p-4 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-20 bg-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xs">
                    <div>08</div>
                    <div>06</div>
                  </div>
                </div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">Cissé idriss</h4>
              <p className="text-purple-200 text-sm mb-3">Montre 1</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-500 hover:bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                  Appelles 68
                </Badge>
                <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  Additions 42
                </Badge>
                <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                  Non Effectuées 2
                </Badge>
              </div>
            </div>

            <Switch checked={true} className="data-[state=checked]:bg-green-500" />
          </div>
        </Card>

        {/* Serveur 2 - Leatitia k */}
        <Card className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white p-4 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">Leatitia k</h4>
              <p className="text-purple-200 text-sm mb-3">Montre 2</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-500 hover:bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                  Appelles 17
                </Badge>
                <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  Additions 9
                </Badge>
                <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                  Non Effectuées 0
                </Badge>
              </div>
            </div>

            <Switch checked={true} className="data-[state=checked]:bg-green-500" />
          </div>
        </Card>

        {/* Serveur 3 - DR */}
        <Card className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white p-4 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-20 bg-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xs">
                    <div>08</div>
                    <div>06</div>
                  </div>
                </div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">DR</h4>
              <p className="text-purple-200 text-sm mb-3">Montre 3</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-500 hover:bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                  Appelles 89
                </Badge>
                <Badge className="bg-green-500 hover:bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                  Additions 117
                </Badge>
                <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                  Non Effectuées 6
                </Badge>
              </div>
            </div>

            <Switch checked={false} className="data-[state=unchecked]:bg-gray-400" />
          </div>
        </Card>
      </div>

      <div className="h-20"></div>
    </div>
  )

  const TablesScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-4 text-white">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => setCurrentScreen("servers-empty")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Les tables</h1>
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm">⏰</span>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-3xl p-4 mt-4">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((table) => (
            <Card key={table} className="bg-amber-900 text-white p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">Table {table}</h4>
                  <p className="text-sm text-amber-200">12 / 02 / 2025</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded border-2 border-amber-800 flex items-center justify-center">
                    <div className="w-8 h-8 bg-black"></div>
                  </div>
                  <span className="text-sm text-amber-200">#45372</span>
                </div>
              </div>
            </Card>
          ))}

          <div className="mt-8 text-center">
            <div className="w-12 h-1 bg-purple-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-gray-600 text-lg font-medium mb-6">Ajouter une Table</h3>
            <Button
              className="w-full text-purple-600 bg-transparent border-none hover:bg-purple-50"
              onClick={() => setCurrentScreen("add-table")}
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter une table
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const AddTableScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-4 text-white">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => setCurrentScreen("tables")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Les tables</h1>
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm">⏰</span>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-3xl p-4 mt-4">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((table) => (
            <Card key={table} className="bg-amber-900 text-white p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">Table {table}</h4>
                  <p className="text-sm text-amber-200">12 / 02 / 2025</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded border-2 border-amber-800 flex items-center justify-center">
                    <div className="w-8 h-8 bg-black"></div>
                  </div>
                  <span className="text-sm text-amber-200">#45372</span>
                </div>
              </div>
            </Card>
          ))}

          <div className="mt-8 text-center">
            <div className="w-12 h-1 bg-purple-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-gray-600 text-lg font-medium mb-6">Ajouter une Table</h3>

            <div className="text-left">
              <p className="text-sm text-gray-600 mb-3">Donner un nom à la TABLE</p>
              <Input placeholder="EX: TABLE A1 ou TABLE 1" className="rounded-xl border-gray-200 mb-6" />

              <Button
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full py-3"
                onClick={() => setCurrentScreen("tables")}
              >
                ENREGISTRER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SubscriptionHistoryScreen = () => (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 pb-8">
        <StatusBar />
        <div className="flex items-center px-4 py-4 text-white">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setCurrentScreen("servers-empty")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold ml-4">Historique d'abonnement</h1>
        </div>

        <div className="px-4 mt-8">
          <Card className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-white">
            <p className="text-purple-200 text-sm mb-2">Offre spécial réabonnement</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold">49.000</span>
              <span className="text-sm">Fr / 1 An</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-300 line-through text-sm">54.000 CFA</span>
                <span className="text-white text-sm ml-2">Remise - 5000 fr</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Payer</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Abonnement</h3>
            <p className="text-sm text-purple-200">ID: H.14755038</p>
          </div>
          <div className="text-right">
            <h3 className="font-semibold">Montant: 6,99 €</h3>
            <p className="text-sm text-purple-200">Payé le: 23/09/2024</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-center mb-6">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-gray-800 text-lg font-semibold">DETAILS</h3>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Compagnie</span>
            <span className="font-semibold">WAVE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Numéro de facture</span>
            <span className="font-semibold">HCY-8714339</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Montant:</span>
            <span className="font-semibold">6,99 €</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payé le</span>
            <span className="font-semibold">23/09/2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Exp</span>
            <span className="font-semibold">23/09/2025</span>
          </div>
        </div>
      </div>
    </div>
  )

  const ProfileSettingsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-purple-600">
      <StatusBar />
      <Header title="" showBack={true} />

      <div className="text-center text-white mb-8">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-red-500 rounded"></div>
        </div>
        <h2 className="text-2xl font-bold">RESTO LE BRENUSS</h2>
        <p className="text-white/80 text-sm">10/07/2020</p>
      </div>

      <div className="flex-1 bg-amber-900 rounded-t-3xl p-6">
        <div className="space-y-6">
          <Card className="bg-gray-600 text-white p-4 rounded-xl">
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Nom</p>
                <p className="font-semibold">RESTO LE BRENUSS</p>
              </div>
              <hr className="border-gray-500" />
              <div>
                <p className="text-gray-300 text-sm">Type d'établissement</p>
                <p className="font-semibold">RESTAURANT</p>
              </div>
              <hr className="border-gray-500" />
              <div>
                <p className="text-gray-300 text-sm">Localisation</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <div className="w-2 h-4 bg-orange-500"></div>
                    <div className="w-2 h-4 bg-white border-t border-b border-gray-300"></div>
                    <div className="w-2 h-4 bg-green-500"></div>
                  </div>
                  <span className="font-semibold">Yamoussoukro, quartier millionnaire</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-600 text-white p-4 rounded-xl">
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Nombre de serveur</p>
                <p className="font-semibold">03</p>
              </div>
              <hr className="border-gray-500" />
              <div>
                <p className="text-gray-300 text-sm">Contact</p>
                <p className="font-semibold">+225 0759028545</p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-amber-200 text-sm mb-4">Nom de l'administrateur du compte</p>
          </div>

          <Card className="bg-gray-600 text-white p-4 rounded-xl">
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Nom</p>
                <p className="font-semibold">Cissé idriss</p>
              </div>
              <hr className="border-gray-500" />
              <div>
                <p className="text-gray-300 text-sm">Adresse email</p>
                <p className="font-semibold">Cisse@gmail.com</p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button
              variant="ghost"
              className="text-amber-200 hover:bg-amber-800/20"
              onClick={() => setCurrentScreen("welcome")}
            >
              🔓 SE DÉCONNECTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const screens = {
    welcome: <WelcomeScreen />,
    login: <LoginScreen />,
    verification: <VerificationScreen />,
    payment: <PaymentScreen />,
    account: <AccountScreen />,
    "servers-empty": <ServersEmptyScreen />,
    "servers-list": <ServersListScreen />,
    "add-server": <AddServerScreen />,
    activity: <ActivityScreen />,
    tables: <TablesScreen />,
    "add-table": <AddTableScreen />,
    "subscription-history": <SubscriptionHistoryScreen />,
    "profile-settings": <ProfileSettingsScreen />,
  }

  return <div className="max-w-sm mx-auto bg-white min-h-screen">{screens[currentScreen]}</div>
}
