(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(t,e,_){"use strict";_.r(e);var r=_(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("本手册描述了如何安装、使用以及拓展 NixOS —— 一个基于纯粹函数式包管理系统 Nix 的 Linux 发行版。")]),t._v(" "),_("p",[t._v("倘若遇到问题，请在 "),_("a",{attrs:{href:"https://discourse.nixos.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discourse"),_("OutboundLink")],1),t._v(" 或 irc://irc.freenode.net/#nixos 上反馈；倘若遇到漏洞，请在 "),_("a",{attrs:{href:"https://github.com/NixOS/nixpkgs/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("NixOS' GitHub issue tracker"),_("OutboundLink")],1),t._v(" 上反馈。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("带有"),_("code",[t._v("#")]),t._v("前缀的命令需要以 root 身份运行 —— 这意味着你需要以具有 root 权限的用户登陆或将此前缀替换为"),_("code",[t._v("sudo")]),t._v("。")])]),t._v(" "),_("h1",{attrs:{id:"第一部分-安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一部分-安装"}},[t._v("#")]),t._v(" 第一部分 安装")]),t._v(" "),_("p",[t._v("这一部分描述了第一次使用 NixOS 时应该如何获取、安装并对其进行配置。")]),t._v(" "),_("h2",{attrs:{id:"第一章-获取-nixos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一章-获取-nixos"}},[t._v("#")]),t._v(" 第一章 获取 NixOS")]),t._v(" "),_("p",[t._v("NixOS 的镜像文件可以于 "),_("a",{attrs:{href:"http://nixos.org/nixos/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NixOS 下载页面"),_("OutboundLink")],1),t._v("下载。这里提供了许多安装选项。有光驱和闲置 CD 光盘的话，将镜像文件烧录至光盘上，并通过它启动计算机或许是最容易的方法。大多数人可能会使用 U 盘来引导启动。在第 2.5.1. 节「通过 USB 设备引导启动」描述了如何准备这样的一个 USB 启动盘。在 "),_("a",{attrs:{href:"https://nixos.wiki/wiki/NixOS_Installation_Guide#Making_the_installation_media",target:"_blank",rel:"noopener noreferrer"}},[t._v("NixOS Wiki"),_("OutboundLink")],1),t._v(" 上还有更多选项。")]),t._v(" "),_("p",[t._v("除了尝试亲自安装 NixOS 外，下面的几种方式也可以获得一个运行的 NixOS 系统：")]),t._v(" "),_("ul",[_("li",[t._v("使用开放式虚拟化软件交付格式（OVF），以便在 VirtualBox 上使用。在 "),_("a",{attrs:{href:"http://nixos.org/nixos/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NixOS 下载页面"),_("OutboundLink")],1),t._v("可用。")]),t._v(" "),_("li",[t._v("使用适用于亚马逊弹性计算云服务（EC 2）的亚马逊机器镜像（AMI）。在"),_("a",{attrs:{href:"https://github.com/NixOS/nixpkgs/blob/master/nixos/modules/virtualisation/ec2-amis.nix",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新亚马逊机器镜像名单"),_("OutboundLink")],1),t._v("可以查看在你的地区的可用项与实例型号。")]),t._v(" "),_("li",[t._v("使用基于 NixOS 的云开发工具 —— NixOps。提供了关于 VirtualBox 和 EC 2 的陈述的详细规格说明。从 "),_("a",{attrs:{href:"https://nixos.org/nixops",target:"_blank",rel:"noopener noreferrer"}},[t._v("NixOps 主页"),_("OutboundLink")],1),t._v("获取详细信息。")])]),t._v(" "),_("h2",{attrs:{id:"第二章-安装-nixos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二章-安装-nixos"}},[t._v("#")]),t._v(" 第二章 安装 NixOS")]),t._v(" "),_("h3",{attrs:{id:"_2-1-引导启动系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-引导启动系统"}},[t._v("#")]),t._v(" 2.1. 引导启动系统")]),t._v(" "),_("p",[t._v("NixOS 可通过 BIOS 或 UEFI 系统安装。通过 UEFI 与 BIOS 的安装步骤大致是相同的。下面将提及不同的部分。")]),t._v(" "),_("p",[t._v("可以通过烧录 CD / USB 设备来制作安装介质。（ 2.5.1. 节「通过 USB 设备引导启动」 描述了如何「烧录」USB 启动盘。）")]),t._v(" "),_("p",[t._v("安装介质容纳了最基础的 NixOS 安装器。它在引导启动结束时应当检测到你的大部分硬件。")]),t._v(" "),_("p",[t._v("8 号虚拟控制台为你准备了本手册。按下 "),_("code",[t._v("Alt")]),t._v("+"),_("code",[t._v("F8")]),t._v("或运行"),_("code",[t._v("nixos-help")]),t._v("以查看。")]),t._v(" "),_("p",[t._v("你将作为"),_("code",[t._v("nixos")]),t._v("用户自动登陆。此帐户不设口令。因此，"),_("code",[t._v("sudo")]),t._v("也不需要密码。")]),t._v(" "),_("p",[t._v("如果你下载了图形化镜像文件，"),_("code",[t._v("systemctl start display-manager")]),t._v("是启动桌面环境的指令。倘若要继续使用终端，"),_("code",[t._v("loadkeys")]),t._v("指令可帮助你切换到你钟爱的键盘布局。（neo 2 也有提供！）")]),t._v(" "),_("h4",{attrs:{id:"_2-1-1-给安装器联网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-给安装器联网"}},[t._v("#")]),t._v(" 2.1.1. 给安装器联网")]),t._v(" "),_("p",[t._v("太多原料（像是 tarballl 文件和 Nixpkgs 二进制发布频道信息）需要下载，因此引导安装过程需要联网（运行"),_("code",[t._v("ip a")]),t._v("以检测）。所在的网络最好有一个 DHCP 服务器。没有的话，"),_("code",[t._v("ifconfig")]),t._v("可以用于手动配置网络连接。")]),t._v(" "),_("p",[t._v("通过图形界面手动配置网络需要先通过运行"),_("code",[t._v("systemctl stop NetworkManager")]),t._v("禁用网络管理器。")]),t._v(" "),_("p",[t._v("通过最小安装器手动配置 Wi-Fi 网络需要运行"),_("code",[t._v("wpa_supplicant -B -i interface -c <(wpa_passphrase 'SSID' 'key')")]),t._v("。")]),t._v(" "),_("p",[t._v("倘若需要从另外一台设备上通过 SSH 继续安装程序，运行"),_("code",[t._v("systemctl start sshd")]),t._v("以激活 SSH 进程。以「root」 或「nixos」登陆需要设置密码。")]),t._v(" "),_("h3",{attrs:{id:"_2-2-分区与格式化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分区与格式化"}},[t._v("#")]),t._v(" 2.2. 分区与格式化")]),t._v(" "),_("p",[t._v("NixOS 安装器不分区或格式化磁盘，因此，你需要自己完成此工作。")]),t._v(" "),_("p",[t._v("NixOS 安装器搭载了多种分区工具，下面的演示例子使用 parted，fdisk、gdisk、cfdisk 与 cgdisk 也供自由选用。")]),t._v(" "),_("p",[t._v("推荐的分区方案因计算机的启动方式而异（Legacy Boot 或 UEFI）。")]),t._v(" "),_("h4",{attrs:{id:"_2-2-1-uefi（gpt-分区表）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-uefi（gpt-分区表）"}},[t._v("#")]),t._v(" 2.2.1 UEFI（GPT 分区表）")]),t._v(" "),_("p",[t._v("对于 UEFI，下面给出一个分区样式。"),_("code",[t._v("/dev/sda")]),t._v("代指被安装的设备：")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("可以安全地忽略 parted 发出的关于需要更新"),_("code",[t._v("/etc/fstab")]),t._v("的消息。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);