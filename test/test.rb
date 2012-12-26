require "webrick"

$port = 10080

server = WEBrick::HTTPServer.new({
	:DocumentRoot => "./",
	:BindAddress => "127.0.0.1",
	:Port => $port
})

trap("INT") do
	server.shutdown
end

server.mount_proc('/ok') do |req, res|
end
server.mount_proc('/ng') do |req, res|
	$error = "failed"
end

Thread.new do
	server.start
end

Dir.glob("*.xml").each do |file|
	basename = File.basename(file, ".*")
	res = `ruby ../stasc #{file} 2>&1`
	if File.exists?(basename + ".html")
		abort res if $? != 0
		$error = false
		`chromium-browser --temp-profile http://localhost:#{$port}/#{basename}.html`
		abort $error if $error
	else
		abort if $? == 0
	end
	print "PASS: #{basename}\n"
end

server.shutdown

